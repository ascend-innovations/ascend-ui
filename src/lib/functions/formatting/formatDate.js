export default function formatDate(timestamp, fullYear = false) {
	timestamp = new Date(timestamp)

	let day = timestamp.getDate()
	let month = timestamp.getMonth() + 1
	let year = timestamp.getYear() + 1900

	if (day < 10) day = `0${day}`

	if (month < 10) month = `0${month}`

	year = fullYear ? year.toString() : year.toString().substring(2, 4)

	if(isNaN(day) || isNaN(month) || isNaN(year)){
		return `Invalid Date`
	}

	return `${month}/${day}/${year}`
}
