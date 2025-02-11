<script>
	import { FilterLabel } from '$lib/index.js'
	export let filters = []
</script>

<div class="filter-container">
	<p class="body-bold-xs">Displaying results for</p>
	{#each filters as filter (filter.tooltip)}
		<FilterLabel {filter} />
	{/each}
</div>
