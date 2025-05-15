export default async function getAppRoles(locals, currentAppId) {
	const response = await locals.supabase.rpc('get_app_roles', {
		app_id: currentAppId,
		logged_in_user_id: locals.user.id,
	})
	const roles = response.data

	return roles
}