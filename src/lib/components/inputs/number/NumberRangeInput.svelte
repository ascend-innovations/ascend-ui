<script>
	import { NumberInput, Label, InputError } from '$lib/index.js'

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
		validationText

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
		/>
		<NumberInput
			bind:value={end}
			min={endMin}
			max={endMax}
			{step}
			{changeCallback}
		/>
	</div>

	{#if validValues === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
