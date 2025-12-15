<script>
	import { InputError, Label, Tag } from '$lib/index.js'

	export let autofocus = false,
		changeCallback = null,
		description = '',
		id = '',
		label = '',
		tag = null,
		max,
		min,
		placeholder = '',
		required = false,
		step = 1,
		styles = [],
		tabindex = '',
		validValue = true,
		validationCallback = null,
		validationText = '',
		value = '',
		readonly=false,
		disabled=false
</script>

<div
	class="number-control"
	style={styles.join(';')}
>
	<div class="number-title">
		{#if label}
			<Label
				{id}
				{label}
			/>
		{/if}
		{#if tag !== null}
			<Tag
				content={tag?.content || ''}
				icon={tag?.icon || null}
				side={tag?.side || ''}
				type={tag?.type || ''}
			/>
		{/if}
	</div>
	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value
		class="number-input"
		{max}
		{min}
		on:blur={validationCallback}
		on:change={changeCallback}
		{step}
		type="number"
		{autofocus}
		{id}
		{placeholder}
		{required}
		{tabindex}
		{readonly}
		{disabled}
	/>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.number-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}

	.number-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}

	.number-input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	.number-input::-webkit-outer-spin-button,
	.number-input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
