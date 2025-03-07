export default async function resetPassword(supabase, sessionData, accessToken, refreshToken, password) {
	if (sessionData) {
		let decodedTokenData = JSON.parse(atob(sessionData))
		accessToken = decodedTokenData.access_token
		refreshToken = decodedTokenData.refresh_token
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
		}
	}

	console.log('Password updated successfully')

	// Step 3: Sign out the user
	await supabase.auth.signOut()

	return { success: true }
}
