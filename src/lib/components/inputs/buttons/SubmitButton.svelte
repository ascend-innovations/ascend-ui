<script>
	export let callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-primary', 'btn-square'],
		disabled = false,
		text = 'Submit'
</script>

<input
	type="submit"
	class={`
		submit-button
		${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
		${classes.join(' ')}
		${disabled ? 'btn-disabled' : ''}
		semibold
	`}
	value={text}
	{disabled}
	on:submit={callback}
/>
