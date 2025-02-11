<script>
	import { RadioInput } from '$lib/index.js'

	export let callback, group, label, value

	function selectValue() {
		group = value
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="radio-option"
	on:click|stopPropagation={selectValue}
	on:keyup|stopPropagation={selectValue}
>
	<RadioInput
		bind:group
		{callback}
		{value}
	/>
	<div class="semibold">
		{label}
	</div>
</div>
