export default async function getAllProfiles(locals, currentAppId, userOrg) {
	const response = await locals.supabase.rpc('get_user_app_profiles', {
		app_id: currentAppId,
		org_id: userOrg,
	})

    if (response.error) {
		console.error('Error retrieving all app profiles:', response.error)
		return { success: false, message: response.error.message }
	}
    console.log(`Successfully retrieved all app profiles for app ${currentAppId} and org ${userOrg}`)

	return response.data
}
