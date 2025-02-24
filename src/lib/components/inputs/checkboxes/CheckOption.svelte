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
	<div class="left-option-column">
		<CheckboxInput
			bind:checked
			callback={checkBox}
		/>
	</div>
	<div class="right-option-column">
		<div class="option-name semibold">{name}</div>
		{#if description}
			<div class="option-description">{description}</div>
		{/if}
	</div>
</div>

<style>
	.checkbox-option {
		display: flex;
		flex-direction: row;
		gap: var(--spacing05);
	}
	.left-option-column {
		align-items: top;
		display: flex;
		justify-content: left;
		width: var(--spacing09);
	}
	.right-option-column {
		display: flex;
		flex-direction: column;
	}
</style>
