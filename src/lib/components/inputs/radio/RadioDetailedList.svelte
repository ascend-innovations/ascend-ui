<script>
	// group: String
	//
	// list = [{
	// 	component: SvelteComponent,
	// 	description: String,
	// 	label: String,
	// 	name: String,
	// 	selected: Boolean,
	// 	value: String
	// }]

	import { RadioInput, InputError } from '$lib/index.js'

	export let list = [],
		group = '',
		validValue,
		validationText

	function selectValue(value) {
		group = value
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="radio-list">
	{#each list as item}
		<div
			class="radio-list__item"
			on:click|stopPropagation={() => selectValue(item.value)}
			on:keyup|stopPropagation={() => selectValue(item.value)}
		>
			<div class="radio-list__item-left">
				<RadioInput
					bind:group
					value={item.value}
				/>
			</div>
			<div class="radio-list__item-right">
				<div class="item-title primary-headline-l-xs semibold">
					{item.name}
				</div>
				<div class="radio-list__item-description">
					{item.description}
				</div>
			</div>
		</div>
	{/each}
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
