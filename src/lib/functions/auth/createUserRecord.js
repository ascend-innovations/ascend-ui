import { createClient } from '@supabase/supabase-js'
import createAuditLog from '$lib/functions/auth/createAuditLog.js'
import sendAccountCreationEmail from '$lib/functions/auth/sendAccountCreationEmail.js'

export default async function createUserRecord(supabase, adminSupabase, portal_url, sendgrid_password, user, details, currentUser) {
	console.log('******************** createUserRecord ********************')
	console.log('******************** payload ********************')
	console.log(user)
	console.log(details)

	const createUserResponse = await adminSupabase.auth.admin.createUser(user)

	if (createUserResponse.error) {
		console.error('Error signing up:', createUserResponse.error.message)
		return { success: false, message: createUserResponse.error.message }
	}

    const data = createUserResponse.data
	const userEmail = user.email
	const userId = data.user.id

	const audit_record = {
		table_name: 'profiles',
		record_id: {
			email: userEmail,
		},
		action: 'INSERT',
		new_data: data,
		updated_by: currentUser.id,
		updated_by_email: currentUser.email,
		updated_at: new Date().toISOString(),
	}
	await createAuditLog(adminSupabase, audit_record)

	// Insert additional user details into the profiles table
	const profileUpdateResponse = await supabase.from('profiles').update(details).eq('id', userId) // Finds the user by ID

	if (profileUpdateResponse.error) {
		console.error('Error updating user profile:', profileUpdateResponse.error.message)
		return { success: false, message: profileUpdateResponse.error.message }
	}

	let results = await sendAccountCreationEmail(supabase, adminSupabase, userEmail, userId, portal_url, sendgrid_password)

	console.log('******************** newUser ********************')
	console.log(data)

	return data
}
