export default async function getProfileData(locals, currentAppId) {
    const extractApplications = (appList) => {
        let orgApps = appList.flatMap((item) => item.organizations.organization_applications)
        let allApps = orgApps.map((app) => app.application)
        allApps.map((a) => a.settings = orgApps.find((oa) => oa.application_id === a.id).settings)

        return allApps
    }
    const extractRoles = (currentApp) => currentApp?.roles?.map((r) => r.name) || []
    const extractOrg = (orgList) => (orgList.length == 1 ? orgList[0].organizations : {})
    const response = await locals.supabase
        .from('profiles')
        .select(
            `
            id, email, name,
              organization:organization_users!inner(
                organizations(*)
              ),
              application_list:organization_users!inner(
                organizations!inner(
                  organization_applications!organization_id(
                    *, application:applications(*, roles(name))
                  )
                )
              )
          `,
        )
        .eq('id', locals.user.id)
        .single()
    const profile = response.data

    profile.has_access = false
    profile.org = extractOrg(profile.organization)
    profile.apps = extractApplications(profile.application_list)
    profile.current_app = profile.apps.find((a) => a.id === currentAppId)
    profile.access_token = locals.session.access_token
    profile.headers = {
        'content-type': 'application/json',
        'X-Application-ID': currentAppId,
        Authorization: `Bearer ${locals.session.access_token}`,
    }

    if (profile.current_app) {
        // const appProfile = profile.app_profiles.find((p) => p.application_id === currentAppId)
        profile.has_access = true
        profile.app_roles = extractRoles(profile.current_app)
        // profile.settings = appProfile ? appProfile.settings : {}
    }

    return profile
}