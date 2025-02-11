<script>
	import { Label, InputError } from '$lib/index.js'

	export let callback = null,
		defaultOptionName = '',
		defaultOptionValue = '',
		id = '',
		label = '',
		optionList = [],
		selectedValue = '',
		styles = [],
		validValue = true,
		validationText = '',
		validationCallback
</script>

<div class="selector-control">
	<Label
		{id}
		{label}
	/>
	<select
		bind:value={selectedValue}
		on:change={callback}
		on:blur={validationCallback}
		style={styles.join(';')}
		{id}
	>
		<option
			selected
			value={defaultOptionValue}
		>
			{defaultOptionName}
		</option>
		{#each optionList as optionItem}
			<option value={optionItem}>
				{optionItem}
			</option>
		{/each}
	</select>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
