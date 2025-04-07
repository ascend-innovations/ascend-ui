export default async function getOrgInfo(supabase) {
	let orgs = await supabase.from('organizations').select('*')
	let app_settings = await supabase.from('organization_applications').select('*')

	return {orgs: orgs.data, app_settings: app_settings.data}
}
