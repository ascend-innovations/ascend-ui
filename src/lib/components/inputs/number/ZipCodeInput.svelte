<script>
	import { Label, InputError } from '$lib/index.js'

	export let autofocus = false,
		id = 'zip-code',
		label = 'Zip Code',
		styles = [],
		placeholder = '',
		required = false,
		tabindex = '',
		validValue = true,
		validationText = '',
		zip = ''
</script>

<div
	class="zip-control"
	style={styles.join(';')}
>
	<Label
		{id}
		{label}
	/>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value={zip}
		class="zip-control__input"
		maxlength="5"
		minlength="5"
		type="text"
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
