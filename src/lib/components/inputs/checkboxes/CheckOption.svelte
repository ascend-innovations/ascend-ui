<script>
	import { CheckboxInput } from '$lib/index.js'

	export let callback = null,
		name = '',
		description = '',
		checked = false

	function checkBox() {
		checked = !checked
		if (callback) callback(checked, name)
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="checkbox-option"
	on:click={checkBox}
	on:keyUp={checkBox}
>
	<div class="checkbox-option__left">
		<CheckboxInput
			bind:checked
			callback={checkBox}
		/>
	</div>
	<div class="checkbox-option__right">
		<div class="semibold">{name}</div>
		{#if description}
			{description}
		{/if}
	</div>
</div>
