<script>
	import { MonthInput, Label, InputError } from '$lib/index.js'

	export let month,
		id = '',
		label = '',
		styles = [],
		required = false,
		validValue = true,
		validationText = ''
</script>

<div
	class="month-selector"
	style={styles.join(';')}
>
	<div class="month-picker">
		<Label
			{id}
			{label}
		/>
		<MonthInput
			bind:month
			{id}
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
