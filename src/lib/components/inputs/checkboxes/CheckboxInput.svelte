<script>
	import { CheckExtraSmallIcon } from '$lib/index.js'

	export let callback = null,
		checked = false,
		value = ''

	$: isChecked = checked

	function checkBox() {
		checked = !checked
		if (callback) callback(checked, value)
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="checkbox-container"
	on:click|preventDefault={checkBox}
>
	<input
		type="checkbox"
		bind:checked
		{value}
	/>
	<div
		class="checkmark"
		style={`background-color: ${checked ? 'var(--primary-500);' : ''}`}
	>
		{#if isChecked}
			<CheckExtraSmallIcon />
		{/if}
	</div>
</div>
