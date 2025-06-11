export default function parseURL(url) {
	try{
		if (url) return [...url.split('/')]
		else return ''
	} catch (e){
		console.warn("Invalid string passed to parseURL")
		return ""
	}
	
}
