import { fail, redirect } from '@sveltejs/kit'
import type { SupabaseClient } from '@supabase/supabase-js'

export async function verifyOtp(supabase: SupabaseClient, email: string, password: string) {
    // Step 1: Authenticate user with password
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        console.error('Login error:', error.message)
        return fail(400, { login_message: 'Invalid email and/or password' })
    }

    // Step 2: Mark the user as starting MFA
    const { user, error: updateError } = await supabase.auth.updateUser({
        data: { mfa_completed: false },
    })

    if (updateError) {
        console.error('Error updating MFA status:', updateError.message)
        return fail(400, { message: 'Failed to update authentication status.' })
    }

    // Step 3: Send OTP
    const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
    })

    if (otpError) {
        console.error('OTP error:', otpError.message)
        return fail(400, { login_message: 'Failed to send OTP. Try again.' })
    }

    // Step 3: Redirect to OTP verification page
    throw redirect(303, `/login/verify-otp`)
}