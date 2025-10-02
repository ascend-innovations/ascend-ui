import { createSession } from '$lib/index.js'

export default async function setPassword(supabase, adminSupabase, formData) {
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    let token = formData.get('data')
    let email = formData.get('email')
    let code = formData.get('code')
    let accessToken = formData.get('access_token')
    let refreshToken = formData.get('refresh_token')
    let userId = formData.get('user_id')

    if (code) {
        let codeResponse = await supabase.auth.exchangeCodeForSession(code)

        if (codeResponse.data) {
            let session = codeResponse.data.session
            accessToken = session.access_token
            refreshToken = session.refresh_token
            userId = session.user.id
        } else {
            return {
                success: false,
                message: 'Token has expired',
            }
        }
    } else if (token && email) {
        console.log('Token and email found')
        const tokenCheckResponse = await adminSupabase
            .from('signup_tokens')
            .select('*')
            .eq('token', token)
            .eq('user_email', email)
            .single()

        if (tokenCheckResponse.error) {
            return {
                success: false,
                message: 'Token not found',
            }
        }

        const tokenData = tokenCheckResponse.data

        if (tokenData) {
            console.log('Token is active')
            let session = await createSession(adminSupabase, email)

            if (session?.error) {
                return {
                    success: false,
                    message: 'Unable to create session',
                }
            }

            accessToken = session.access_token
            refreshToken = session.refresh_token
            userId = session.user.id

            console.log('Removing token')
            const tokenDeleteResponse = await supabase
                .from('signup_tokens')
                .delete()
                .eq('token', token)
        } else {
            return {
                success: false,
                message: 'Token invalid',
            }
        }
	}

    if (password !== confirmPassword) {
        return {
            success: false,
            message: 'Passwords must match',
            accessToken,
            refreshToken,
            userId,
            email
        }
    }

	let sessionResponse = await supabase.auth.setSession({
		access_token: accessToken,
		refresh_token: refreshToken,
	})
	let sessionError = sessionResponse.error

	if (sessionError) {
		console.error('Error verifying token:', sessionError.message)
		return {
			success: false,
			message: sessionError.message,
			accessToken,
			refreshToken,
			userId,
			email
		}
	}
	console.log('Token Verified')

	// Step 1: Update the user password
	let updateResponse = await supabase.auth.updateUser({ password })
	let updateError = updateResponse.error
	let data = updateResponse.data
	console.log(data)

	if (updateError) {
		console.error('Error updating password:', updateError.message)
		let message = 'Please review requirements below and try again.'

		if (updateError.message.includes('Password is known to be weak')) {
			message = 'Password is known to be weak and easy to guess, please choose a different one.'
		}

		return {
			success: false,
			message: message,
			accessToken,
			refreshToken,
			userId,
			email
		}
	}

	console.log('Password updated successfully')

	const { error: profileError } = await supabase.from('profiles').update({ setup_completed: true }).eq('id', userId)

	// Step 3: Sign out the user
	await supabase.auth.signOut()

	return { success: true }
}
