import isPostalCode from 'validator/lib/isPostalCode'

export default function isValidZipCode(zipCode, locale = 'US') {
	try{
		return isPostalCode(zipCode, locale)
	} catch(e) {
		return false
	}
}
