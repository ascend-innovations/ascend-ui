import { fail, redirect } from '@sveltejs/kit'

export async function login(supabase, email, password) {
    // Step 1: Authenticate user with password
    let loginResponse = await supabase.auth.signInWithPassword({ email, password })
    let loginError = loginResponse.error

    if (loginError) {
        console.error('Login error:', loginError.message)
        return fail(400, { login_message: 'Invalid email and/or password' })
    }

    // Step 2: Mark the user as starting MFA
    let userUpdateResponse = await supabase.auth.updateUser({
        data: { mfa_completed: false },
    })
    let userUpdateError = userUpdateResponse.error

    if (userUpdateError) {
        console.error('Error updating MFA status:', userUpdateError.message)
        return fail(400, { message: 'Failed to update authentication status.' })
    }

    // Step 3: Send OTP
    let otpResponse = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
    })
    let otpError = otpResponse.error

    if (otpError) {
        console.error('OTP error:', otpError.message)
        return fail(400, { login_message: 'Failed to send OTP. Try again.' })
    }

    // Step 3: Redirect to OTP verification page
    throw redirect(303, `/login/verify-otp`)
}