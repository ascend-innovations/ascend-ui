export default function consolidateMonths(data, domain, range) {
	const monthsData = [...data]
	let months = []
	let monthIndex = 0
	for (let i = 0; i < monthsData.length; i++) {
		if (i === 0) {
			months.push(monthsData[i])
		} else if (monthsData[i][domain].getMonth() === monthsData[i - 1][domain].getMonth()) {
			months[monthIndex][range] += monthsData[i][range]
		} else if (monthsData[i][domain].getMonth() !== monthsData[i - 1][domain].getMonth()) {
			monthIndex++
			months.push(monthsData[i])
		}
	}
	for (let month of months) {
		month[range] = Math.round(month[range] * 100) / 100
	}
	return months
}
