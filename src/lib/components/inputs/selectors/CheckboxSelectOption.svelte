<script>
	import { CheckboxInput } from '$lib/index.js'

	export let value, checked, callback = null
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

<style>
	.custom-select-option {
		padding: var(--spacing03);
	}
	.custom-select-label {
		display: flex;
		gap: var(--spacing05);
		font-weight: 700;
	}
</style>
