<script>
	import { MonthPicker, InputError } from '$lib/index.js'

	export let start,
		end,
		styles = [],
		required = false,
		validValue,
		validationText
</script>

<div
	class="month-range-selector"
	style={styles.join(';')}
>
	<div class="month-range">
		<MonthPicker
			bind:month={start}
			id="start-date"
			label="Start Date"
			{required}
		/>
		<MonthPicker
			bind:month={end}
			id="end-date"
			label="End Date"
			{required}
		/>
	</div>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.month-range {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing09);
	}
</style>
