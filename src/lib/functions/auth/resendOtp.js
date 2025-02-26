import { fail } from '@sveltejs/kit'
import type { SupabaseClient } from '@supabase/supabase-js'

export async function resendOtp(supabase: SupabaseClient, email: string) {
	const { error: otpError } = await supabase.auth.signInWithOtp({
		email,
		options: { shouldCreateUser: false },
	})

	if (otpError) {
		console.error('OTP error:', otpError.message)
		return fail(400, { otp_send_message: 'Failed to send One-Time Passcode. Try again.' })
	}

	return { otp_resend_message: 'New Passcode Sent' }
}