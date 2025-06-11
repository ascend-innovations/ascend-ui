export default function formatTimeStamp(dateTimeString, reverse = false) {
	if(dateTimeString === "" ||  typeof  dateTimeString === 'boolean' 
		|| typeof dateTimeString === "undefined" || dateTimeString === null){
		console.log('Invalid date time string')
		return ''
	}
	
	const dateTimeObject = new Date(dateTimeString)

	if (isNaN(dateTimeObject)) {
		console.warn('Invalid date time string')
		return ''
	}

	const thisYear = dateTimeObject.getFullYear()
	const thisMonth = dateTimeObject.getMonth() + 1
	const thisDay = dateTimeObject.getDate()
	const dateString = `${thisMonth}/${thisDay}/${thisYear}`

	const thisHour = dateTimeObject.getHours()
	const thisMinute = dateTimeObject.getMinutes() > 9 ? dateTimeObject.getMinutes() : `0${dateTimeObject.getMinutes()}`
	const ampm = thisHour < 12 ? 'AM' : 'PM'
	const timeString = `${thisHour > 12 ? thisHour - 12 : thisHour}:${thisMinute}${ampm}`

	const timeStampString = reverse ? `${dateString} ${timeString}` : `${timeString} ${dateString}`

	return timeStampString
}
