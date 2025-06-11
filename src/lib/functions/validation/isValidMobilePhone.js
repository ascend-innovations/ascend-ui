import isMobilePhone from 'validator/lib/isMobilePhone'

export default function isValidMobilePhone(phone) {
	try{
		return isMobilePhone(phone)
	} catch (e){
		return false
	}

}
