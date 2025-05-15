export default function withinTimeRange(start, end, query) {
	/**
	 * Accepts date or string objects and returns a boolean 
	 * If start < end, it will return true if query is between the values
	 * If start > end, it will return true if the query value is outside the range 
	**/
	const startDate = new Date(`1970-01-01T${start}`)
	const endDate = new Date(`1970-01-01T${end}`)
	const queryDate = new Date(`1970-01-01T${query}`)

	if (startDate <= endDate) {
		return queryDate >= startDate && queryDate <= endDate
	} else {
		return queryDate >= startDate || queryDate <= endDate
	}
}
