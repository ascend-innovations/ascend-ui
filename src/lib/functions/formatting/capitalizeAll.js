import { capitalize } from '$lib/index.js'

export default function capitalizeAll(phrase) {
	try {
		const wordArray = phrase.split(' ')

		for (let i = 0; i < wordArray.length; i++) {
			wordArray[i] = capitalize(wordArray[i])
		}

		const capitalizedPhrase = wordArray.join(' ')

		return capitalizedPhrase
	} catch(e){
		console.warn("Capitalize failed for the input: ", phrase)
		return phrase
	}
}
