<script>
	import { Button } from '$lib/index.js'

	export let links = []
</script>

<div class="simple-navbar">
	{#each links as link}
		<Button
			text={link.text}
			url={link.url}
			classes={['btn-link']}
		/>
	{/each}
</div>
