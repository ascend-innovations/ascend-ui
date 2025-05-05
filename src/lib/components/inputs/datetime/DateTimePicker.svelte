<script>
	import { DatePicker, TimePicker, InputError, Label } from '$lib/index.js'

	export let date,
		id,
		label,
		dateId,
		required,
		time,
		timeId,
		styles = [],
		validationText = '',
		validValue = true
</script>

<div
	class="date-time-selector width-100"
	style={styles.join(';')}
>
	<Label 
		{id}
		{label}
	/>
	<div class="date-time-selector__inputs width-100">
		<DatePicker
			bind:date
			id={dateId}
			label="Enter Date"
			{required}
		/>
		<TimePicker
			bind:time
			id={timeId}
			label="Enter Time"
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
