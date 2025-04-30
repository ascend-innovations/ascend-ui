export default function consolidateYears(data, domain, range) {
	const yearsData = [...data]
	let years = []
	let yearIndex = 0
	for (let i = 0; i < yearsData.length; i++) {
		if (i === 0) {
			years.push(yearsData[i])
		} else if (yearsData[i][domain].getFullYear() === yearsData[i - 1][domain].getFullYear()) {
			years[yearIndex][range] += yearsData[i][range]
		} else if (yearsData[i][domain].getFullYear() !== yearsData[i - 1][domain].getFullYear()) {
			yearIndex++
			years.push(yearsData[i])
		}
	}
	for (let year of years) {
		year[range] = Math.round(year[range])
		year[domain] = new Date(`${year[domain].getFullYear()}`)
	}
	return years
}
