export default async function getOrgInfo(supabase, orgName) {
    let org = await supabase.from('organizations')
        .select('*')
        .eq('name', orgName)
        .single()

    return org
}