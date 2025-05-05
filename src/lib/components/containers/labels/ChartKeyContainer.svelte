<script>
	import { ChartKey } from '$lib/index.js'

	export let data = [],
		colors = [],
		seriesKey,
		column = false
</script>

<div class="chart-key-container {column ? 'chart-key--column' : ''}">
	{#each data as d, i}
		<ChartKey
			color={colors[i]}
			text={d[seriesKey]}
		/>
	{/each}
</div>
