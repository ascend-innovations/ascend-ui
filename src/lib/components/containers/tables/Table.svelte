<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let columns = [],
		list = [],
		sortCallback,
		chart = false,
		sortMap = {}
</script>

<section class="no-gap {chart ? '' : 'table-container'}">
	<TableHeaders
		bind:list
		{sortCallback}
		{columns}
		{sortMap}
	/>
	<TableBody
		bind:list
		{columns}
	/>
</section>

<style>
	.no-gap {
		gap: 0;
	}
	.table-container {
		border: var(--neutral-stroke-100-s);
		border-radius: var(--border-radius-s);
	}
</style>
