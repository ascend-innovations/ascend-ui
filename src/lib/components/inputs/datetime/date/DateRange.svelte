<script>
	import { DatePicker, InputError } from '$lib/index.js'

	export let start,
		startLabel = 'Start Date',
		end,
		endLabel = 'End Date',
		id = '',
		name = '',
		styles = [],
		fill = false,
		required = false,
		validValue,
		validationText
</script>

<div
	class="date-range-selector"
	style={styles.join(';')}
>
	<div class="date-range">
		<DatePicker
			bind:date={start}
			id={`start-${id}`}
			name={`start-${name}`}
			label={startLabel}
			styles={['width: 100%']}
			{required}
			{fill}
		/>
		<DatePicker
			bind:date={end}
			id={`end-${id}`}
			name={`end-${name}`}
			label={endLabel}
			styles={['width: 100%']}
			{required}
			{fill}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.date-range {
		display: flex;
		/* justify-content: space-between; */
		gap: var(--spacing09);
	}
</style>
