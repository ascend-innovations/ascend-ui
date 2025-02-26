export default async function resetPassword(supabase, type, tokenHash, accessToken, refreshToken, password) {
    if (tokenHash && type) {
        let otpResponse = await supabase.auth.verifyOtp({
            type,
            token_hash: tokenHash,
        })
        let otpError = otpResponse.error
        let session = otpResponse.data

        if (otpError) {
            console.error('One-Time Passcode Verification Failed:', otpError.message)
            return {
                success: false,
                message: otpError.message,
                accessToken,
                refreshToken,
            }
        }

        accessToken = session.session.access_token
        refreshToken = session.session.refresh_token
    } else {
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
    }
    console.log('Token Verified')

    // Step 1: Update the user password
    let updateResponse = await supabase.auth.updateUser({ password })
    let updateError = updateResponse.error
    let data = updateResponse.data
    console.log(data)

    if (updateError) {
        console.error('Error updating password:', updateError.message)
        return {
            success: false,
            message: updateError.message,
            accessToken,
            refreshToken
        }
    }

    console.log('Password updated successfully')

    // Step 3: Sign out the user
    await supabase.auth.signOut()

    return { success: true }
}