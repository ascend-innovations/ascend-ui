<script>
	import { TooltipElement } from '$lib/index.js'
	export let filter = {}

	let text = filter.label?.join(', ')
</script>

<TooltipElement>
	<div
		slot="element"
		class="filter-label"
	>
		<svelte:component this={filter.icon} />
		<p class="body-bold-xs filter-label__text truncate-text">{text}</p>
	</div>
	<div slot="content">
		{filter.tooltip}
	</div>
</TooltipElement>
