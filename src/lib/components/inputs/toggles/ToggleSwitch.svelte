<script>
	import { BulletListIcon, CardGridIcon } from '$lib/index.js'

	export let leftIcon = BulletListIcon,
		rightIcon = CardGridIcon,
		checked = false
</script>

<label class="toggle-switch border-radius-s">
	<div class="toggle-switch__icon-container">
		<div class="toggle-switch__icon">
			<svelte:component this={leftIcon} />
		</div>
		<div class="toggle-switch__icon">
			<svelte:component this={rightIcon} />
		</div>
	</div>
	<input
		type="checkbox"
		bind:checked
	/>
	<div class="toggle-switch__slider border-radius-s">
		<div class="toggle-switch__left border-radius-s"></div>
		<div class="toggle-switch__right border-radius-s"></div>
	</div>
</label>
