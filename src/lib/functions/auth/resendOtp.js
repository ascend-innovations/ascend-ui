export default async function resendOtp(supabase, email) {
	let response = await supabase.auth.signInWithOtp({
		email,
		options: { shouldCreateUser: false },
	})
	let error = response.error

	if (error) {
		console.error('OTP error:', error.message)
		return { success: false, message: 'Failed to send One-Time Passcode. Try again.' }
	}

	return { success: true, otp_resend_message: 'New Passcode Sent' }
}
