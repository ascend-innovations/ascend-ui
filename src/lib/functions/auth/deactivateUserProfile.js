export default async function deactivateUserProfile(locals, targetUserId, currentAppId) {
	const response = await locals.supabase.rpc('deactivate_user_profile', {
		target_user_id: targetUserId,
		app_id: currentAppId,
		logged_in_user_id: locals.user.id,
	})

	if (response.error) {
		console.error('Error deactivating user profile:', response.error)
		return { success: false, message: response.error.message }
	}
	console.log(`Successfully deactivated profile for user ${targetUserId}`)

	return response.data
}
