export default function paginateTable(data, direction, pageSize = 10) {
	if (direction === 'previous') {
		if (data.currentPage !== 1) {
			data.leftIndex -= pageSize
			data.rightIndex -= pageSize
			data.currentPage -= 1
			data.pageData = data.tableData.slice(leftIndex, rightIndex)
		}
	}

	if (direction === 'next') {
		if (data.currentPage < data.totalPages) {
			data.leftIndex += pageSize
			data.rightIndex += pageSize
			data.currentPage += 1
			data.pageData = data.tableData.slice(leftIndex, rightIndex)
		}
	}

	return data
}
