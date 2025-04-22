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
	<div class="show-chevron">	
		<ArrowUpExtraSmallIcon />
	</div>
	{:else if order === 'oldest'}
	<div class="show-chevron">	
		<ArrowDownExtraSmallIcon/>
	</div>
	{:else if order === ""}
		<div class="fade-chevron">
			<ChevronSelectorVerticalExtraSmallIcon/>
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
		transition: color 300ms ease-in-out; 
	}
	.fade-chevron{
		opacity:0;
		transition: all 300ms ease-in-out;
		color: var(--neutral-400) 
	}
	.show-chevron{
		transition: all 300ms ease-in-out;
		color: var(--neutral-400) 
	}
	button:hover .fade-chevron, .show-chevron {
		opacity: 1;
		color: var(--Neutral-800---Base, #140D31);
	}
	button:hover {
		color: var(--Neutral-800---Base, #140D31);
	}
</style>
