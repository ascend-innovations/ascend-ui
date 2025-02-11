<script>
	import { CharacterCounter, TextAreaInput, TextMessageBubble } from '$lib/index.js'

	export let callback = null,
		cols = '',
		id = '',
		label = '',
		maxlength = 160,
		minlength = '',
		name = '',
		placeholder = 'Enter Text Message',
		required = false,
		rows = '',
		styles = [],
		text = ''
</script>

<div class="text-message-bubble">
	<TextMessageBubble>
		<TextAreaInput
			bind:text
			name={name || label}
			{callback}
			{cols}
			{id}
			{maxlength}
			{minlength}
			{placeholder}
			{required}
			{rows}
			{styles}
		/>
	</TextMessageBubble>
	{#if maxlength}
		<div class="text-counter">
			<CharacterCounter
				{maxlength}
				{text}
			/>
		</div>
	{/if}
</div>
