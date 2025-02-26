export default function validateSupabasePassword(password) {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
	const passingRegex = passwordRegex.test(password)
	return typeof password === 'string' && passingRegex
}
