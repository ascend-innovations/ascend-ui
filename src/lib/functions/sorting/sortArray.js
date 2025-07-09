export default function sortArray(unsortedArray, columnKey, columnType, sortOrder) {
	const numericValues = ['date', 'number', 'dollar']

	const booleanValues = ['boolean', 'checkbox', 'checklist', 'radiolist']

	// sort the items by the column in the given order
	return unsortedArray.sort((a, b) => {
		let aItem = a[columnKey]
		let bItem = b[columnKey]

		// sorting number-based values
		if (numericValues.includes(columnType)) {
			// convert items for 'number' columnType
			if (columnType === 'number') {
				aItem = parseInt(a[columnKey])
				bItem = parseInt(b[columnKey])
			}
			// convert items for 'date' columnType
			else if (columnType === 'date') {
				aItem = new Date(a[columnKey])
				bItem = new Date(b[columnKey])
			}
			// convert items for 'dollar' columnType
			else if (columnType === 'dollar') {
				aItem = parseFloat(a[columnKey].replace(/[$,]/g, '')) // remove dollar sign and commas for sorting
				bItem = parseFloat(b[columnKey].replace(/[$,]/g, '')) // remove dollar sign and commas for sorting
			}
			// return based on sort order
			if (sortOrder === 'newest') return aItem - bItem
			else if (sortOrder === 'oldest') return bItem - aItem

			// sorting boolean-based values
		} else if (booleanValues.includes(columnType)) {
			// return based on sort order
			if (sortOrder === 'newest') {
				if (aItem && !bItem) return 1
				else if (!aItem && bItem) return -1
			} else if (sortOrder === 'oldest') {
				if (aItem && !bItem) return -1
				else if (!aItem && bItem) return 1
			}
			return 0
		} else {
			// convert items for 'array' columnType
			if (columnType === 'array') {
				aItem = a[columnKey].sort().join(' ')
				bItem = b[columnKey].sort().join(' ')
			}
			// return based on sort order
			if (sortOrder === 'newest') {
				if (aItem > bItem) return -1
				else if (aItem < bItem) return 1
			} else if (sortOrder === 'oldest') {
				if (aItem < bItem) return -1
				else if (aItem > bItem) return 1
			}
			return 0
		}
	})
}
