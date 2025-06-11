export default function withinDateRange(start, end, query) {
	/**
	 * Accepts date or string objects and returns a boolean 
	 * If start < end, it will return true if query is between the values
	 * If start > end, it will return true if the query value is outside the range 
	 **/

	const startDate = new Date(start)
	const endDate = new Date(end)
	const queryDate = new Date(query)

	if (startDate <= endDate) {
		return queryDate >= startDate && queryDate <= endDate
	} else {
		return queryDate >= startDate || queryDate <= endDate
	}
}
