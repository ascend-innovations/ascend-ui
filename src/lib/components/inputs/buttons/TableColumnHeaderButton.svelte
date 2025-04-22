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
		<ArrowUpExtraSmallIcon colorOverride="var(--neutral-400)"/>
	{:else if order === 'oldest'}
		<ArrowDownExtraSmallIcon colorOverride="var(--neutral-400)"/>
	{:else if order === ""}
		<div class="fade-chevron">
			<ChevronSelectorVerticalExtraSmallIcon colorOverride="var(--neutral-400)" />
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
		color:var(--neutral-400);
	}
	.fade-chevron{
		opacity:0;
		transition: opacity 300ms ease-in-out; 
		
	}
	button:hover .fade-chevron {
		opacity: 1;
	}
	

</style>
