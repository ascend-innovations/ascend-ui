<script>
	import { RadioOption, InputError } from '$lib/index.js'

	export let callback,
		group = '',
		list = [],
		styles = [],
		validValue = true,
		validationText = ''
</script>

<div
	class="radio-list"
	style={styles.join(';')}
>
	{#each list as item}
		<RadioOption
			bind:group
			{callback}
			label={item.label}
			value={item.value}
		/>
	{/each}
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
