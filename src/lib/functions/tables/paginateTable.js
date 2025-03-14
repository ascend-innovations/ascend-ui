export default async function paginateTable(data, direction, fetchNext = null, pageSize = 10) {
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
			const response = await fetchNext()
			const body = await response.json()
			data.tableData = data.tableData.cat(body.results)
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
