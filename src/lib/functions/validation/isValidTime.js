import isTime from 'validator/lib/isTime'

export default function isValidTime(time) {
	try{
		return isTime(time)
	} catch (e){
		return false
	}
	
}
