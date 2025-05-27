export default function createObjectArrayFromCSV(csvFile, headerRow = 0) {
	/**
	 * @param {string} csvFile string representation of a file
	 * @param {int} headerRow location of the starting position - 1 Blank space is automatically removed
	 */
	let fileRowsArray = csvFile.trim().split(`\n`)

	let fileRowsArrayStart = 0
	for (let i = 0; i < fileRowsArray.length; i++) {
		if (fileRowsArray[i].trim() === '') {
			fileRowsArrayStart = i + 1
		}
	}
	fileRowsArray.splice(0, fileRowsArrayStart)

	if (headerRow > 0) {
		fileRowsArray.splice(0, headerRow) //remove rows up to header row.
	}

	let columnHeaders = fileRowsArray[0].trim().split(`,`)

	let columnHeaderStart = 0
	for (let i = 0; i < columnHeaders.length; i++) {
		if (columnHeaders[i].trim() === '') {
			columnHeaderStart = i + 1
		}
	}
	columnHeaders.splice(0, columnHeaderStart)

	// Remove the header row from data
	fileRowsArray.shift()

	let objectArray = []

	for (let i = 0; i < fileRowsArray.length; i++) {
		let dataRow = fileRowsArray[i]
		let dataColumnsArray = dataRow.trim().split(',')

		// Remove leading empty columns
		dataColumnsArray.splice(0, columnHeaderStart)

		// Skip empty rows
		if (dataColumnsArray.every((col) => col.trim() === '')) {
			continue
		}

		let newDataObject = {}
		for (let j = 0; j < columnHeaders.length; j++) {
			newDataObject[columnHeaders[j]] = dataColumnsArray[j] || ''
		}
		objectArray.push(newDataObject)
	}

	return objectArray
}
