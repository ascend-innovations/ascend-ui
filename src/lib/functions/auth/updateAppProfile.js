export default async function updateAppProfile(locals, targetUserId, currentAppId, settings) {
	const data = {
		target_user_id: targetUserId,
		app_id: currentAppId,
		new_settings: settings,
		logged_in_user_id: locals.user.id,
	}
	console.log('Updating App Profile: ', data)
	const response = await locals.supabase.rpc('update_app_profile', data)

	if (response.error) {
		console.error('Error updating app profile:', response.error)
		return { success: false, message: response.error.message }
	}
	console.log(`Successfully updated app profile for user ${targetUserId}`)

	return response.data
}
