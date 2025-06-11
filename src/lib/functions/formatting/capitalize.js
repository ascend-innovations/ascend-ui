export default function captitalize(word) {
	try {
	const letterArray = word.split('')

	const firstLetter = letterArray[0]

	const capitalFirstLetter = firstLetter?.toUpperCase()

	letterArray[0] = capitalFirstLetter

	const capitalizedWord = letterArray.join('')

	return capitalizedWord
	} catch(e){
		console.warn("Capitalize failed for the input: ", word)
		return word
	}
}
