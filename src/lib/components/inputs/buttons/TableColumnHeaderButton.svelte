<script>
	import { ArrowDownExtraSmallIcon, ArrowUpExtraSmallIcon, ChevronSelectorVerticalExtraSmallIcon } from '$lib/index.js'

	export let callback,
		order,
		text = ''
</script>

<button
	on:click={callback}
	class="table-column-header-button semibold"
>
	{text}
	{#if order === 'newest'}
		<div class="arrow-display-override">
			<ArrowUpExtraSmallIcon colorOverride="var(--icon-color-override)" />
		</div>
	{:else if order === 'oldest'}
		<div class="arrow-display-override">
			<ArrowDownExtraSmallIcon colorOverride="var(--icon-color-override)" />
		</div>
	{:else if order === ''}
		<div class="fade-chevron">
			<ChevronSelectorVerticalExtraSmallIcon />
		</div>
	{/if}
</button>
