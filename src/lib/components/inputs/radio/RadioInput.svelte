<script>
	export let callback = null,
		group,
		value
</script>

<input
	bind:group
	on:change={callback}
	type="radio"
	{value}
/>
