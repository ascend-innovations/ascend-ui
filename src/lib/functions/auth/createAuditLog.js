export default async function createAuditLog(supabase, payload) {
	// Insert the new audit log into Supabase
	const response = await supabase
		.from('audit_log')
		.insert([payload]) // Supabase requires an array for inserts
		.select()
		.single() // Returns the newly created record

	if (response.error) {
		console.error('Error inserting audit log:', response.error.message)
		throw new Error(`Failed to create audit log: ${response.error.message}`)
	}
    console.log('Audit Log created successfully')

	return response.data
}
