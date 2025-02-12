<script>
	import { TableRow } from '$lib/index.js'

	export let columns, list, all
</script>

<div class="table-body-container">
	{#each list as row, rowIndex (row.id || rowIndex)}
		{#if row.display || row?.display === undefined}
			<TableRow
				bind:list
				bind:all
				{columns}
				{rowIndex}
			/>
		{/if}
	{/each}
</div>
