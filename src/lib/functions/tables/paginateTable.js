export default function paginateTable(data, direction, fetchNext = null, pageSize = 10) {
	if (direction === 'previous') {
		if (data.currentPage !== 1) {
			data.leftIndex -= pageSize
			data.rightIndex -= pageSize
			data.currentPage -= 1
			data.pageData = data.tableData.slice(data.leftIndex, data.rightIndex)
		}
	}

	if (direction === 'next') {
		if (fetchNext) {
			try {
				fetchNext()
			} catch(e){
				return data
			}
		}
		if (data.currentPage < data.totalPages) {
			data.leftIndex += pageSize
			data.rightIndex += pageSize
			data.currentPage += 1
			data.pageData = data.tableData.slice(data.leftIndex, data.rightIndex)
		}
	}

	return data
}
