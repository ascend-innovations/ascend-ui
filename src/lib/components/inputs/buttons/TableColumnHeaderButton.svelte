<script>
	import { ArrowDownExtraSmallIcon, ArrowUpExtraSmallIcon } from '$lib/index.js'

	export let callback,
		order,
		text = ''
</script>

<button
	on:click={callback}
	class="semibold"
>
	{text}
	{#if order === 'newest'}
		<ArrowUpExtraSmallIcon />
	{:else if order === 'oldest'}
		<ArrowDownExtraSmallIcon />
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
	}
</style>
