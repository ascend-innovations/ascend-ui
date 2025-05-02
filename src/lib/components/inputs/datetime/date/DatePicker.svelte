<script>
	import { DateInput, Label, InputError } from '$lib/index.js'

	export let date,
		id = '',
		label = '',
		name = '',
		styles = [],
		fill,
		required = false,
		validValue,
		validationText
</script>

<div
	class="date-picker-selector"
	style={styles.join(';')}
>
	<div class="date-picker {fill ? 'date-picker-full-width' : ''}">
		<Label
			{id}
			{label}
		/>
		<DateInput
			bind:date
			{id}
			{name}
			{required}
			styles={['width: 100%']}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
