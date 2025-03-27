export default async function login(supabase, email, password) {
    // Step 1: Authenticate user with password
    let loginResponse = await supabase.auth.signInWithPassword({ email, password })
    let loginError = loginResponse.error

    if (loginError) {
        console.error('Login error:', loginError.message)
        return { success: false, message: 'Invalid email and/or password' }
    }

    // Step 2: Check if profile is active
    let profileData = await supabase
        .from('profiles')
        .select('active')
        .eq('id', loginResponse.data.user.id)
        .single()
    let profileError = profileData.error

    if (profileError) {
        console.error('Profile check error:', profileError.message)
        return { success: false, message: 'Failed to check user profile.' }
    }

    if (profileData.data && profileData.data.active === false) {
        console.log('User profile is inactive.')
        // Sign out the user
        await supabase.auth.signOut()
        return { success: false, message: 'Your account is inactive. Please contact your administrator for assistance.' }
    }

    // Step 3: Mark the user as starting MFA
    let userUpdateResponse = await supabase.auth.updateUser({
        data: { mfa_completed: false },
    })
    let userUpdateError = userUpdateResponse.error

    if (userUpdateError) {
        console.error('Error updating MFA status:', userUpdateError.message)
        return { success: false, message: 'Failed to update authentication status.' }
    }

    // Step 4: Send OTP
    let otpResponse = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
    })
    let otpError = otpResponse.error

    if (otpError) {
        console.error('OTP error:', otpError.message)
        return { success: false, message: 'Failed to send OTP. Try again.' }
    }

    // Step 5: Redirect to OTP verification page
    return { success: true }
}