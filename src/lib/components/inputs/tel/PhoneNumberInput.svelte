<script>
	import { Label, Tag, InputError } from '$lib/index.js'

	export let id = '',
		label = '',
		tag = null,
		maxlength = '10',
		minlength = '10',
		phoneNumber = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = '',
		validationText = '',
		validationCallback,
		validValue = true
</script>

<div class="phone-number-control">
	<div class="phone-number-control__title">
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
	<input
		bind:value={phoneNumber}
		on:blur={validationCallback}
		class="phone-number-control__input {validValue === false ? 'error' : ''}"
		style={styles.join(';')}
		type="tel"
		{id}
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
