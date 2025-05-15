import isURL from 'validator/lib/isURL'

export default function isValidUrl(url) {
	try{
		return isURL(url)
	} catch(e){
		return false
	}
}
