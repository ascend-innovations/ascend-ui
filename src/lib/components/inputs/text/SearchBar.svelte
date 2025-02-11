<script>
	import { SearchSmallIcon } from '$lib/index.js'

	export let callback,
		id = '',
		maxlength = '',
		minlength = '',
		placeholder = 'Search',
		query = '',
		styles = [],
		tabindex = ''
</script>

<form
	role="search"
	class="search-bar-input-control"
>
	<button
		on:click={callback}
		class="search-bar-button"
	>
		<svelte:component this={SearchSmallIcon} />
	</button>
	<input
		bind:value={query}
		class="search-bar"
		on:input={callback}
		style={styles.join(';')}
		type="search"
		{id}
		{maxlength}
		{minlength}
		{placeholder}
		{tabindex}
	/>
</form>
