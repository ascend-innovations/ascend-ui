<script>
	import { TimeInput, Label, InputError } from '$lib/index.js'

	export let id = '',
		label = '',
		required = false,
		styles = [],
		time = '',
		validValue,
		validationText
</script>

<div
	class="time-picker-selector width-100"
	style={styles.join(';')}
>
	<div class="time-picker-selector__input width-100">
		<Label
			{id}
			{label}
		/>
		<TimeInput
			bind:time
			{id}
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
