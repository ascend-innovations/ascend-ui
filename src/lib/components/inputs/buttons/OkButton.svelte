<script>
	import { Button } from '$lib/index.js'

	export let id='', callback = undefined

</script>

<Button
	id={id}
	{callback}
	classes={['btn-l', 'btn-primary', 'btn-full', 'btn-square']}
	text="OK"
/>
