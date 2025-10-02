export default async function createSession(adminSupabase, email) {
    // Step 1: generate a recovery link
    const linkResponse = await adminSupabase.auth.admin.generateLink({
        type: 'recovery',
        email,
    })

    if (linkResponse.error) {
        return linkResponse
    }

    // Step 2: exchange the token for a session
    const otpResponse = await adminSupabase.auth.verifyOtp({
        type: 'recovery',
        token_hash: linkResponse.data.properties.hashed_token,
    })

    if (otpResponse.error) {
        return otpResponse
    }

    return otpResponse.data.session
}
