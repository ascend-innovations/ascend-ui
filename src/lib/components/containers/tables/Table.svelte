<script>
	import { TableBody, TableHeaders } from '$lib/index.js'

	export let columns = [],
		list = [],
		chart = false
</script>

<section class="no-table-gap {chart ? '' : 'table-container'}">
	<TableHeaders
		bind:list
		{columns}
	/>
	<TableBody
		bind:list
		{columns}
	/>
</section>
