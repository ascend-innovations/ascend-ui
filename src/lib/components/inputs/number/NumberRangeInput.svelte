<script>
	import { InputError, Label, NumberInput } from '$lib/index.js'

	export let start,
		startMin,
		startMax,
		end,
		endMin,
		endMax,
		id,
		label,
		step = 1,
		styles = [],
		validValues = true,
		changeCallback = validRange,
		validationText,
		startReadonly,
		startDisabled,
		endReadonly,
		endDisabled

	function validRange() {
		if (start && end) {
			if (start > end) {
				validValues = false
				validationText = 'Starting value cannot be higher than ending value'
			} else {
				validValues = true
			}
		}
	}
</script>

<div
	class="number-range-input"
	style={styles?.join(';')}
>
	<Label
		{id}
		{label}
	/>
	<div class="input-control">
		<NumberInput
			bind:value={start}
			min={startMin}
			max={startMax}
			{step}
			{changeCallback}
			readonly={startReadonly}
			disabled={startDisabled}
		/>
		<NumberInput
			bind:value={end}
			min={endMin}
			max={endMax}
			{step}
			{changeCallback}
			readonly={endReadonly}
			disabled={endDisabled}
		/>
	</div>

	{#if validValues === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.number-range-input {
		width: 100%;
	}
	.input-control {
		display: flex;
		gap: var(--spacing09);
		margin-bottom: var(--spacing03);
	}
</style>
