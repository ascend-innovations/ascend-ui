<script>
	import { CardGridIcon } from '$lib/index.js'

	export let icon = CardGridIcon,
		checked = false
</script>

<label class="toggle-button border-radius-s">
	<input
		type="checkbox"
		bind:checked
	/>
	<div class="toggle-button__icon-container border-radius-s">
		<div class="toggle-button__icon">
			<svelte:component this={icon} />
		</div>
	</div>
</label>
