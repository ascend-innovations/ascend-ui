<script>
	import { Label, Tag, InputError } from '$lib/index.js'

	export let autofocus = false,
		description = '',
		id = '',
		label = '',
		tag = null,
		name = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		url = '',
		validValue = true,
		validationText = ''
</script>

<div
	class="url-control width-100"
	style={styles.join(';')}
>
	<div class="url-title">
		<div class="url-title width-100">
			<Label
				{id}
				{label}
			/>
			{#if tag !== null}
				<Tag
					content={tag?.content || ''}
					icon={tag?.icon || null}
					side={tag?.side || ''}
					type={tag?.type || ''}
				/>
			{/if}
		</div>
	</div>

	{#if description}
		<div class="body-xs">{description}</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		bind:value={url}
		class="width-100"
		type="url"
		pattern="https://.*"
		{autofocus}
		{id}
		{name}
		{placeholder}
		{required}
		{tabindex}
	/>
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
