<script>
	import { Label, Tag } from '$lib/index.js'

	export let autofocus = false,
		description = '',
		id = '',
		label = '',
		tag = null,
		maxlength = '',
		minlength = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		text = ''
</script>

<div class="text-control">
	<div class="text-input-title">
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
	<input
		bind:value={text}
		class="text-input"
		style={styles.join(';')}
		type="text"
		{autofocus}
		{id}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.text-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
		width: 100%;
	}

	.text-input-title {
		display: flex;
		gap: var(--spacing05);
		justify-content: flex-start;
		width: 100%;
	}
</style>
