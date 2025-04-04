export default async function getOrgInfo(supabase, orgName) {
    let org = await supabase.from('organizations')
        .select('name, color_scheme')
        .eq('name', orgName)
        .single()

    return org
}