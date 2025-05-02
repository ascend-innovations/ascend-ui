export default function formatPhoneNumberForDB(rawPhoneNumber) {
	try{	
		return rawPhoneNumber.replaceAll(/[^0-9]+/g, '')
	} catch (e){
		console.warn("invalid values passed to formatPhoneForDB: ", e)
		return ""
	}
}
