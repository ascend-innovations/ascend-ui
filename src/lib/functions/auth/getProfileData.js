export default async function getProfileData(locals, currentAppId) {
	const response = await locals.supabase.rpc('get_user_profile', {
		uid: locals.user.id,
	})
	const profile = response.data

	profile.has_access = false
	profile.current_app = profile.apps.find((a) => a.id === currentAppId)
	profile.access_token = locals.session.access_token
	profile.headers = {
		'content-type': 'application/json',
		'X-Application-ID': currentAppId,
		Authorization: `Bearer ${locals.session.access_token}`,
	}

	if (profile.current_app) {
		profile.app_roles = profile.current_app.roles ?? []

		if (profile.app_roles.length > 0) {
			profile.has_access = true
		}
	}

	return profile
}
