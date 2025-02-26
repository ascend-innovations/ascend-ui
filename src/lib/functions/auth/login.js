export default async function login(supabase, email, password) {
    // Step 1: Authenticate user with password
    let loginResponse = await supabase.auth.signInWithPassword({ email, password })
    let loginError = loginResponse.error

    if (loginError) {
        console.error('Login error:', loginError.message)
        return { success: false, message: 'Invalid email and/or password' }
    }

    // Step 2: Mark the user as starting MFA
    let userUpdateResponse = await supabase.auth.updateUser({
        data: { mfa_completed: false },
    })
    let userUpdateError = userUpdateResponse.error

    if (userUpdateError) {
        console.error('Error updating MFA status:', userUpdateError.message)
        return { success: false, message: 'Failed to update authentication status.' }
    }

    // Step 3: Send OTP
    let otpResponse = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
    })
    let otpError = otpResponse.error

    if (otpError) {
        console.error('OTP error:', otpError.message)
        return { success: false, message: 'Failed to send OTP. Try again.' }
    }

    // Step 4: Redirect to OTP verification page
    return { success: true }
}