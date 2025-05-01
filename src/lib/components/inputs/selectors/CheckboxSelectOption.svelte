<script>
	import { CheckboxInput } from '$lib/index.js'

	export let value,
		checked,
		callback = null
</script>

<div class="custom-select-option">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="custom-select-label">
		<CheckboxInput
			bind:checked
			{value}
			{callback}
		/>
		{value}
	</label>
</div>
