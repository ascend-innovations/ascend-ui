<script>
	import { InputError, Label, Tag } from '$lib/index.js'

	export let autofocus = false,
		changeCallback = null,
		description = '',
		id = '',
		label = '',
		tag = null,
		maxlength = '',
		minlength = '',
		name = '',
		pattern = null,
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		text = '',
		validationText = '',
		validValue = true,
		validationCallback = null,
		readonly=false,
		disabled=false
</script>

<div class="text-control">
	{#if label || tag}
		<div class="text-title">
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
	{/if}

	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value={text}
		on:blur={validationCallback}
		on:change={changeCallback}
		class="text-input"
		style={styles.join(';')}
		type="text"
		{autofocus}
		{id}
		{maxlength}
		{minlength}
		{name}
		{pattern}
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
	.text-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}

	.text-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
</style>
