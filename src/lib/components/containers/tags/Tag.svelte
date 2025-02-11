<script>
	export let content = '',
		icon = null,
		side = '',
		type = ''
</script>

<div class={`tag semibold ${type}`}>
	{#if icon && side === 'left'}
		<svelte:component this={icon} />
	{/if}
	{content}
	{#if icon && side === 'right'}
		<svelte:component this={icon} />
	{/if}
</div>
