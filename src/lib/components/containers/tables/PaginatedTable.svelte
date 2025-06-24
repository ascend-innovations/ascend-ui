<script>
	import { page } from '$app/stores'
	import { Table, Pagination, paginateTable, sortArray } from '$lib/index.js'

	export let columns,
		list,
		totalPages = null,
		fetchNext = null,
		pageLength = 10,
		sortCallback = sortTable

	$: pageData = {
		tableData: list,
		pageData: list.slice(0, pageLength),
		currentPage: 1,
		leftIndex: 0,
		rightIndex: pageLength,
		totalPages: totalPages || Math.ceil(list.length / pageLength),
	}

	// create sortMap object with keys that match the column's key with a value of empty string
	const sortMap = {}
	Object.values(columns).forEach((column) => {
		if (column.key !== undefined) sortMap[column.key] = ''
	})

	function sortTable(columnKey, columnType) {
		// save the last sort order for this column
		const previousSortOrder = sortMap[columnKey]

		// reset all sortMap values to empty string
		Object.keys(sortMap).forEach((sortKey) => (sortMap[sortKey] = ''))

		// set the new sorting order for this column
		if (previousSortOrder === 'oldest') sortMap[columnKey] = 'newest'
		else sortMap[columnKey] = 'oldest'

		pageData.tableData = pageData.tableData.map((data) => {
			if (columnKey.includes('dollar') || columnKey.includes('price') || columnKey.includes('number') || columnKey.includes('cost') || columnKey.includes('total') || columnKey.includes('amount')) {
				data[columnKey] = parseFloat(data[columnKey].replace(/[$,]/g, '')) // remove dollar sign and commas for sorting
			}
			return data
		})

		let list = sortArray(pageData.tableData, columnKey, columnType, sortMap[columnKey])
		pageData.pageData = pageData.tableData.slice(0, pageLength)
		;(pageData.currentPage = 1), (pageData.leftIndex = 0), (pageData.rightIndex = pageLength)

		list = list.map((data) => {
			if (columnKey.includes('dollar') || columnKey.includes('price') || columnKey.includes('number') || columnKey.includes('cost') || columnKey.includes('total') || columnKey.includes('amount')) {
				data[columnKey] = `$${data[columnKey].toLocaleString()}` // format back to dollar string
			}
			return data
		})
		
		// sort the array on the store for this table type
		pageData.tableData = list
	}

	async function serverFetchNext() {
		if (pageData.currentPage % pageLength === 0) {
			const response = await fetchNext()
			const body = await response.json()
			pageData.tableData = pageData.tableData.cat(body.results)
		}
	}
</script>

<div class="table-container">
	<Table
		{columns}
		{sortCallback}
		list={pageData.pageData}
		{sortMap}
	/>

	{#if pageData.totalPages > 1}
		<div class="pagination-container">
			<Pagination
				currentPage={pageData.currentPage}
				totalPages={pageData.totalPages}
				leftClickCallback={() => (pageData = paginateTable(pageData, 'previous'))}
				rightClickCallback={() =>
					(pageData = paginateTable(pageData, 'next', fetchNext ? serverFetchNext : null))}
			/>
		</div>
	{/if}
</div>

<style>
	.table-container {
		width: 100%;
	}

	.pagination-container {
		margin-top: var(--spacing09);
	}
</style>
