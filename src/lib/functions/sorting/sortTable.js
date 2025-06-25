import { sortArray } from '$lib/index.js'

export default function sortTable(columnKey, columnType, list, sortMap) {
	// save the last sort order for this column
	const previousSortOrder = sortMap[columnKey]

	// reset all sortMap values to 'none'
	Object.keys(sortMap).forEach((sortKey) => (sortMap[sortKey] = ''))

	// set the new sorting order for this column
	if (previousSortOrder === 'oldest') sortMap[columnKey] = 'newest'
	else sortMap[columnKey] = 'oldest'

	if (columnType === 'dollar') {
		list = list.map((data) => {
			data[columnKey] = parseFloat(data[columnKey].replace(/[$,]/g, '')) // remove dollar sign and commas for sorting
			return data
		})
	}

	sortedList = sortArray(list, columnKey, columnType, sortMap[columnKey])

	if (columnType === 'dollar') {
		sortedList = sortedList.map((data) => {
			data[columnKey] = `$${data[columnKey].toLocaleString()}` // format back to dollar string
			return data
		})
	}

	return sortedList
}
