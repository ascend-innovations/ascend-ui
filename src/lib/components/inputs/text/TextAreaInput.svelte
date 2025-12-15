<script>
	import { CharacterCounter, InputError, Label, Tag } from '$lib/index.js'

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
		readonly=false,
		disabled=false
</script>

<div class="textarea-control">
	{#if label || tag}
		<div class="textarea-title">
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
		class="textarea-content border-neutral-100-s border-radius-s"
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
		{readonly}
		{disabled}
	/>
	{#if maxlength}
		<CharacterCounter
			{maxlength}
			{text}
		/>
	{/if}
	{#if validValue === false}
		<InputError text={`${validationText}`} />
	{/if}
</div>

<style>
	.textarea-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
	.textarea-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}
	.textarea-content {
		background-color: transparent;
		border-radius: var(--border-radius-s);
		border: var(--neutral-stroke-100-s);
		padding: var(--spacing05) var(--spacing09);
		resize: none;
	}
</style>
