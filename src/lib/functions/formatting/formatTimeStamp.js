export default function formatTimeStamp(dateTimeString, reverse = false) {
	// Try to split common "YYYY-MM-DD HH:mm:ss" style strings
    // If only date is given, time defaults to 00:00
    const parts = dateTimeString.trim().split(/[\sT]/)
    const dateParts = parts[0].split(/[-/]/)
    const timeParts = (parts[1] || '00:00').split(':')
    const year = Number(dateParts[0])
    const month = Number(dateParts[1]) - 1 // JS months are 0-based
    const day = Number(dateParts[2])
    const hours = Number(timeParts[0] || 0)
    const minutes = Number(timeParts[1] || 0)
    const seconds = Number(timeParts[2] || 0)
    const dateTimeObject = new Date(year, month, day, hours, minutes, seconds)
    if (isNaN(dateTimeObject.getTime())) {
        console.log('Invalid date time string')
        return ''
    }
    const monthNum = dateTimeObject.getMonth() + 1
    const dayNum = dateTimeObject.getDate()
    const dateString = `${monthNum}/${dayNum}/${dateTimeObject.getFullYear()}`
    const hours24 = dateTimeObject.getHours()
    const hours12 = hours24 % 12 || 12
    const minuteString = String(dateTimeObject.getMinutes()).padStart(2, '0')
    const ampm = hours24 < 12 ? 'AM' : 'PM'
    const timeString = `${hours12}:${minuteString}${ampm}`
    return reverse ? `${dateString} ${timeString}` : `${timeString} ${dateString}`
}
