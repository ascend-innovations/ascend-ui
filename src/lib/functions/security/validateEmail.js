export default function validateEmail(email) {
	if (typeof email !== 'string' || email.length > 255) return false
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const passingRegex = emailRegex.test(email)
	return typeof email === 'string' && email.length >= 8 && email.length <= 256 && passingRegex
}
