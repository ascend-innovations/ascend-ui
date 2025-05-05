<script>
	import { TableRow } from '$lib/index.js'

	export let columns, list
</script>

<div class="table-body">
	{#each list as row, rowIndex (row.id || rowIndex)}
		{#if row.display || row?.display === undefined}
			<TableRow
				bind:list
				{columns}
				{rowIndex}
			/>
		{/if}
	{/each}
</div>
