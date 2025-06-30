import { sortArray } from '$lib/index.js'

export default function sortTable(columnKey, columnType, list, sortMap) {
	// save the last sort order for this column
	const previousSortOrder = sortMap[columnKey]

	// reset all sortMap values to 'none'
	Object.keys(sortMap).forEach((sortKey) => (sortMap[sortKey] = ''))

	// set the new sorting order for this column
	if (previousSortOrder === 'oldest') sortMap[columnKey] = 'newest'
	else sortMap[columnKey] = 'oldest'

	// sort the array on the store for this table type
	return sortArray(list, columnKey, columnType, sortMap[columnKey])
}
