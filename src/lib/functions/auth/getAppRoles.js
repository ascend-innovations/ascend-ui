export default async function getAppRoles(locals, currentAppId) {
	const response = await locals.supabase.rpc('get_app_roles', {
		app_id: currentAppId,
		logged_in_user_id: locals.user.id,
	})

	if (response.error) {
		console.error('Error retrieving all app roles:', response.error)
		return { success: false, message: response.error.message }
	}
	console.log(`Successfully retrieved all app roles for app ${currentAppId}`)

	return response.data
}
