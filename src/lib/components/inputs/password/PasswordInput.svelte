<script>
	import { Label, Tag, InputError } from '$lib/index.js'

	export let autofocus = false,
		description = '',
		id = '',
		label = '',
		maxlength = '',
		minlength = '',
		name = '',
		password = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		tag = null,
		validValue,
		validationText,
		validationCallback
</script>

<div class="password-control">
	<div class="password-title">
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
		bind:value={password}
		on:blur={validationCallback}
		class="password-input"
		style={styles.join(';')}
		type="password"
		{autofocus}
		{id}
		{name}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
