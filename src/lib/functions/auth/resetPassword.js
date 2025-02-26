import { fail, redirect } from '@sveltejs/kit'
import type { SupabaseClient } from '@supabase/supabase-js'

export async function verifyOtp(supabase: SupabaseClient, type: string, tokenHash: string, accessToken: string, refreshToken: string, password: string) {
    if (tokenHash && type) {
        const { data: session, error: sessionError } = await locals.supabase.auth.verifyOtp({
            type,
            token_hash: tokenHash,
        })

        if (sessionError) {
            console.error('One-Time Passcode Verification Failed:', sessionError.message)

            return {
                success: false,
                message: sessionError.message,
                accessToken: accessToken,
                refreshToken: refreshToken,
            }
        }

        accessToken = session.session.access_token
        refreshToken = session.session.refresh_token
    } else {
        const { data: session, error: sessionError } = await locals.supabase.auth.setSession({
            refresh_token: refreshToken,
            access_token: accessToken,
        })

        if (sessionError) {
            console.error('Error verifying token:', sessionError.message)
            return {
                success: false,
                message: sessionError.message,
                accessToken: accessToken,
                refreshToken: refreshToken,
            }
        }
    }
    console.log('Token Verified')

    // Step 1: Update the user password
    const { data, error } = await locals.supabase.auth.updateUser({ password })
    console.log(data)

    if (error) {
        console.error('Error updating password:', error.message)
        return { success: false, message: error.message, accessToken: accessToken, refreshToken: refreshToken }
    }

    console.log('Password updated successfully')

    // Step 3: Sign out the user
    await locals.supabase.auth.signOut()

    throw redirect(303, '/login')
}