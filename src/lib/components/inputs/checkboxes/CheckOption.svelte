<script>
	import { CheckboxInput } from '$lib/index.js'

	export let callback = null,
		name = '',
		description = '',
		checked = false

	function checkBox() {
		checked = !checked
		if (callback) callback(checked, value)
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="checkbox-option"
	on:click={checkBox}
	on:keyUp={checkBox}
>
	<div class="checkbox-left-option-column">
		<CheckboxInput
			bind:checked
			callback={checkBox}
		/>
	</div>
	<div class="checkbox-right-option-column">
		<div class="option-name semibold">{name}</div>
		{#if description}
			<div class="option-description">{description}</div>
		{/if}
	</div>
</div>
