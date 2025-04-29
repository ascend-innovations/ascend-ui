export default function consolidateMonths(data, domain, range) {
	/** 
	 * Consolodates all data points for a given day to a single data point.
	 * Assumes that the domains are already sorted.
	 * 
	 *  
	 * data: object = {domain: Date, range, number} //object containing Date:number pairs for consolodation 
	 * domain: string //The name of the attribute containing the date
	 * range: string  // The name of the attribute containing number values.
	 * non-domain or range values will be replaced with the first occurance of the sequence.
	 * 		Example: {date:example-date, series:CIT, range:example-range }, {date:example-date, series:SIT, range:example-range }
	 * 		When consolodated, series:SIT will be lost.
	*/

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
		month[range] = Math.round(month[range])
	}
	return months
}
