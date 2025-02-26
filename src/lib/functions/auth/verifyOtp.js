export default async function verifyOtp(supabase, email, otp) {
	if (!email || !otp) {
		return { success: false, message: 'One-Time Passcode is required' }
	}

	let otpResponse = await supabase.auth.verifyOtp({
		email,
		token: otp,
		type: 'email',
	})
	let otpError = otpResponse.error

	if (otpError) {
		console.error('OTP verification error:', otpError.message)
		return { success: false, message: 'Invalid One-Time Passcode. Please ensure the correct code was used. If needed, resend the code and try again.' }
	}

	// Mark the user as having completed MFA
	let updateUserResponse = await supabase.auth.updateUser({
		data: { mfa_completed: true },
	})
	let updateUserError = updateUserResponse.error

	if (updateUserError) {
		console.error('Error updating MFA status:', updateUserError.message)
		return { success: false, message: 'Failed to update authentication status.' }
	}

	// Redirect to dashboard after successful authentication
	return { success: true }
}