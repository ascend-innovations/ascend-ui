<script>
	import { Label, InputError } from '$lib/index.js'

	export let autofocus = false,
		changeCallback = null,
		description = '',
		id = '',
		label = '',
		max,
		min,
		placeholder = '',
		required = false,
		step = 1,
		styles = [],
		tabindex = '',
		validValue = true,
		validationCallback = null,
		validationText = '',
		value = ''
</script>

<div
	class="number-control width-100"
	style={styles.join(';')}
>
	<div class="text-title">
		{#if label}
			<Label
				{id}
				{label}
			/>
		{/if}
	</div>
	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value
		class="number-input"
		{max}
		{min}
		on:blur={validationCallback}
		on:change={changeCallback}
		{step}
		type="number"
		{autofocus}
		{id}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

