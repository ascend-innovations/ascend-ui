<script>
	import { CheckboxInput } from '$lib/index.js'

	export let value,
		checked,
		callback = null
</script>

<div class="checkbox-select">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="checkbox-select__label">
		<CheckboxInput
			bind:checked
			{value}
			{callback}
		/>
		{value}
	</label>
</div>
