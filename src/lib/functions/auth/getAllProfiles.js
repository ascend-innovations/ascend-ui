export default async function getAllProfiles(locals, currentAppId, userOrg) {
	const response = await locals.supabase.rpc('get_user_app_profiles', {
		app_id: currentAppId,
		org_id: userOrg,
	})
	const profiles = response.data


	return profiles
}
