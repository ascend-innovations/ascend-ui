<script>
	export let id = '',
		label = '',
		cursor = false
</script>

{#if id}
	<label
		class="semibold"
		for={id}
		style={cursor ? 'cursor: pointer' : ''}
	>
		{label}
	</label>
{/if}
