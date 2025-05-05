<script>
	import { CharacterCounter, Label, Tag, InputError } from '$lib/index.js'

	export let autofocus = false,
		callback = null,
		cols = '',
		description = '',
		id = '',
		label = '',
		maxlength = '',
		minlength = '',
		name = '',
		placeholder = '',
		required = false,
		rows = '',
		styles = [],
		tabindex = null,
		tag = null,
		text = '',
		validValue = true,
		validationText = '',
		characterCount = true
</script>

<div class="textarea-control">
	{#if label || tag}
		<div class="textarea-control__title">
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
	<textarea
		bind:value={text}
		class="textarea-control__content border-neutral-100-s border-radius-s"
		name={name || label}
		on:input={callback || ''}
		style={styles.join(';')}
		{autofocus}
		{cols}
		{id}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{rows}
		{tabindex}
	/>
	{#if maxlength && characterCount}
		<CharacterCounter
			{maxlength}
			{text}
		/>
	{/if}
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>
