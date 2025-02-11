<script>
	import { BulletListIcon, CardGridIcon } from '$lib/index.js'

	export let leftIcon = BulletListIcon,
		rightIcon = CardGridIcon,
		checked = false
</script>

<label class="toggle-switch border-radius-s">
	<div class="toggle-switch-icon-container">
		<div class="toggle-switch-icon">
			<svelte:component this={leftIcon} />
		</div>
		<div class="toggle-switch-icon">
			<svelte:component this={rightIcon} />
		</div>
	</div>
	<input
		type="checkbox"
		bind:checked
	/>
	<div class="slider-container border-radius-s">
		<div class="toggle-switch-left border-radius-s"></div>
		<div class="toggle-switch-right border-radius-s"></div>
	</div>
</label>
