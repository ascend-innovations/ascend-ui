<script>
	// list = [{
	// 	component: SvelteComponent,
	// 	description: String,
	// 	label: String,
	// 	name: String,
	// 	selected: Boolean,
	// 	value: String
	// }]

	import { CheckOption, InputError } from '$lib/index.js'

	export let callback,
		list = [],
		styles = [],
		validValue,
		validationText
</script>

<div
	class="check-list"
	style={styles.join(';')}
>
	{#each list as item}
		<div class="check-item">
			<CheckOption
				bind:checked={item.selected}
				description={item.description}
				name={item.name}
				value={item.value}
				{callback}
			/>
			{#if list.component}
				<svelte:component
					this={item.component}
					class="check-component"
				/>
			{/if}
		</div>
	{/each}
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
