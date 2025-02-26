import { fail, redirect } from '@sveltejs/kit'
import type { SupabaseClient } from '@supabase/supabase-js'

export async function verifyOtp(supabase: SupabaseClient, email: string, otp: string) {
	if (!email || !otp) {
		return fail(400, { otp_auth_message: 'One-Time Passcode is required' })
	}

	const { error } = await supabase.auth.verifyOtp({
		email,
		token: otp,
		type: 'email',
	})

	if (error) {
		console.error('OTP verification error:', error.message)
		return fail(400, { otp_auth_message: 'Invalid One-Time Passcode. Please ensure the correct code was used. If needed, resend the code and try again.' })
	}

	// Mark the user as having completed MFA
	const { error: updateError } = await supabase.auth.updateUser({
		data: { mfa_completed: true },
	})

	if (updateError) {
		console.error('Error updating MFA status:', updateError.message)
		return fail(400, { otp_auth_message: 'Failed to update authentication status.' })
	}

	// Redirect to dashboard after successful authentication
	throw redirect(303, '/')
}