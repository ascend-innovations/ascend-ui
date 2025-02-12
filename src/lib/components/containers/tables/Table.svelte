<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let columns = [],
		list = [],
		all = [],
		chart = false
</script>

<section class="no-gap {chart ? '' : 'table-container'}">
	<TableHeaders
		bind:list
		bind:all
		{columns}
	/>
	<TableBody
		bind:list
		bind:all
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
