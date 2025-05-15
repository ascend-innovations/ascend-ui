import { createClient } from '@supabase/supabase-js'
import createAuditLog from '$lib/functions/auth/createAuditLog.js'
import sendAccountCreationEmail from '$lib/functions/auth/sendAccountCreationEmail.js'

export default async function createUserRecord(supabase, adminSupabase, portal_url, sendgrid_password, userData, currentUser) {
	console.log('******************** createUserRecord ********************')

	const user = UserData.user
	const details = userData.details
	const roles = userData.roles
	const organizationId = userData.organization

	console.log('******************** payload ********************')
	console.log(user)
	console.log(details)

	const createUserResponse = await adminSupabase.auth.admin.createUser(user)

	if (createUserResponse.error) {
		console.error('Error signing up:', createUserResponse.error.message)
		return { success: false, message: createUserResponse.error.message }
	}
    console.log('User created successfully')
    const data = createUserResponse.data
	const userEmail = user.email
	const userId = data.user.id

	const userAuditRecord = {
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
	await createAuditLog(adminSupabase, userAuditRecord)

    console.log('Updating user profile with details:', details)
	// Insert additional user details into the profiles table
	const profileUpdateResponse = await supabase.from('profiles').update(details).eq('id', userId) // Finds the user by ID

	if (profileUpdateResponse.error) {
		console.error('Error updating user profile:', profileUpdateResponse.error.message)
		return { success: false, message: profileUpdateResponse.error.message }
	}

	if (data) {
        let userOrganization = [{ organization_id: organizationId, user_id: userId }]
        let userRoles = roles.map(function (r) {
            return { role_id: r, user_id: userId }
        })
        console.log('userOrganizations', userOrganizations)
        console.log('userRoles', userRoles)

        if (userRoles) {
            console.log('Creating user role record')
            const userRolesResponse = await adminSupabase
                .from('user_roles')
                .insert(payload) // Supabase requires an array for inserts
                .select() // Returns the newly created record

            if (userRolesResponse.error) {
                console.error('Error inserting user roles:', userRolesResponse.error)
                throw new Error(`Failed to create user roles: ${userRolesResponse.error.message}`)
            }
            console.log('User role record created successfully')
            const userRolesAuditRecord = {
                table_name: 'user_roles',
                record_id: {
                    email: userEmail,
                },
                action: 'INSERT',
                new_data: userRolesResponse.data,
                updated_by: currentUser.id,
                updated_by_email: currentUser.email,
                updated_at: new Date().toISOString(),
            }
            await createAuditLog(adminSupabase, userRolesAuditRecord)
        }

        if (userOrganizations) {
            console.log('Creating organization user record')
            const organizationUserResponse = await adminSupabase
                .from('organization_users')
                .insert(payload) // Supabase requires an array for inserts
                .select() // Returns the newly created record

            if (organizationUserResponse.error) {
                console.error('Error inserting organization users:', organizationUserResponse.error)
                throw new Error(`Failed to create organization users: ${organizationUserResponse.error.message}`)
            }
            console.log('Organization user record created successfully')
            const organizationUserAuditRecord = {
                table_name: 'organization_users',
                record_id: {
                    email: userEmail,
                },
                action: 'INSERT',
                new_data: organizationUserResponse.data,
                updated_by: currentUser.id,
                updated_by_email: currentUser.email,
                updated_at: new Date().toISOString(),
            }
            await createAuditLog(adminSupabase, organizationUserAuditRecord)
        }
	}

	let results = await sendAccountCreationEmail(supabase, adminSupabase, userEmail, userId, portal_url, sendgrid_password)

	console.log('******************** newUser ********************')
	console.log(data)

	return data
}
