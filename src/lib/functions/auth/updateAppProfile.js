export default async function updateAppProfile(locals, targetUserId, currentAppId, settings) {
	const response = await locals.supabase.rpc('update_app_profile', {
		target_user_id: targetUserId,
		app_id: currentAppId,
		new_settings: settings,
		logged_in_user_id: locals.user.id,
	})

	return response
}
