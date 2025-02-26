export default function validateSupabasePassword(password) {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
	const passingRegex = passwordRegex.test(password)
	return typeof password === 'string' && passingRegex
}
