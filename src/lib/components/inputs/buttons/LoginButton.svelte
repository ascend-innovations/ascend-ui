<script>
	import { SubmitButton } from '$lib/index.js'

	export let id='', callback = null,
		disabled = false
</script>

<SubmitButton
	id={id}
	{callback}
	{disabled}
	classes={['btn-full', 'btn-l', 'btn-primary', 'btn-rect']}
	text="Login"
/>
