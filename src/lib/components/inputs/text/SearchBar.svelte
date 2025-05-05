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
	class="search-bar-control"
>
	<button
		on:click={callback}
		class="search-bar-control__button"
	>
		<svelte:component this={SearchSmallIcon} />
	</button>
	<input
		bind:value={query}
		class="search-bar-control__content"
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
