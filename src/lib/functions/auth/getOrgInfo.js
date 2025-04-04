export default async function getOrgInfo(supabase) {
	let org = await supabase.from('organizations').select('*')

	return org
}
