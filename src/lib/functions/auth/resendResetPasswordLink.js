import { createClient } from '@supabase/supabase-js'

export default async function resendResetPasswordLink(supabase, email, portal_url) {
    const response = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: portal_url + '/reset-password'
    })

    return response
}