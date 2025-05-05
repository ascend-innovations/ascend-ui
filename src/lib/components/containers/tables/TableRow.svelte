<script>
	import { TableCell } from '$lib/index.js'

	export let columns, list, rowIndex

	$: row = list[rowIndex]
</script>

<div class="table-row">
	{#each columns as column}
		<TableCell
			bind:column
			bind:row
		/>
	{/each}
</div>
