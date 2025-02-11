<script>
	import { ArrowDownExtraSmallIcon, ArrowUpExtraSmallIcon } from '$lib/index.js'

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
		<ArrowUpExtraSmallIcon />
	{:else if order === 'oldest'}
		<ArrowDownExtraSmallIcon />
	{/if}
</button>
