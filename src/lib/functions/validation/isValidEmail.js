import isEmail from 'validator/lib/isEmail'

export default function isValidEmail(email = '') {
	return isEmail(email)
}
