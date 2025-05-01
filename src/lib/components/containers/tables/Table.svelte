<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let columns = [],
		list = [],
		sortCallback,
		chart = false,
		sortMap = {}
</script>

<section class="no-table-gap {chart ? '' : 'table-container'}">
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
