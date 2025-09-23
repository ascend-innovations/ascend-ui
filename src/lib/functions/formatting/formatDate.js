export default function formatDate(timestamp, fullYear = false) {
	timestamp = new Date(`${timestamp}T00:00:00`)

	let day = timestamp.getDate()
	let month = timestamp.getMonth() + 1
	let year = timestamp.getYear() + 1900

	if (day < 10) day = `0${day}`

	if (month < 10) month = `0${month}`

	year = fullYear ? year.toString() : year.toString().substring(2, 4)

	return `${month}/${day}/${year}`
}