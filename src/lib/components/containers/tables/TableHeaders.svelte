<script>
	import { TableColumnHeaderCell, sortArray } from '$lib/index.js'

	export let columns, list, sortCallback = sortTable

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

		// sort the array on the store for this table type
		list = sortArray(list, columnKey, columnType, sortMap[columnKey])
	}
</script>

<div class="table-header-row">
	{#each columns as column}
		<TableColumnHeaderCell
			bind:list
			order={sortMap[column.key]}
			{column}
			sortTable={sortCallback}
		/>
	{/each}
</div>

<style>
	.table-header-row {
		align-items: flex-start;
		border-bottom: var(--neutral-stroke-100-s);
		display: flex;
	}
</style>
