import { fail } from '@sveltejs/kit'

export async function resendOtp(supabase, email) {
	let response = await supabase.auth.signInWithOtp({
		email,
		options: { shouldCreateUser: false },
	})
	let error = response.error

	if (error) {
		console.error('OTP error:', error.message)
		return fail(400, { otp_send_message: 'Failed to send One-Time Passcode. Try again.' })
	}

	return { otp_resend_message: 'New Passcode Sent' }
}