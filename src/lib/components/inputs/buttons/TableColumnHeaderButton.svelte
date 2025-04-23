<script>
	import { ArrowDownExtraSmallIcon, ArrowUpExtraSmallIcon, ChevronSelectorVerticalExtraSmallIcon } from '$lib/index.js'

	export let callback,
		order,
		text = ''
</script>

<button
	on:click={callback}
	class="semibold body-bold-xs"
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

<style>
	button {
		align-items: center;
		text-align: start;
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		gap: var(--spacing05);
		padding: 0;
		width: 100%;
		color: var(--neutral-400);
		transition: color 300ms ease-in-out;
	}
	.fade-chevron {
		opacity: 0;
		transition: all 300ms ease-in-out;
		color: var(--neutral-400);
	}
	.arrow-display-override {
		opacity: 0.65;
		--icon-color-override: var(--neutral-400);
		transition: all 300ms ease-in-out;
	}
	button:hover .fade-chevron {
		opacity: 1;
		color: var(--Neutral-800);
	}
	button:hover .arrow-display-override {
		opacity: 1;
		--icon-color-override: var(--neutral-800);
	}
	button:hover {
		color: var(--Neutral-800);
	}
</style>
