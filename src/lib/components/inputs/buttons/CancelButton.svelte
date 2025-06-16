<script>
	import { Button, browserBack } from '$lib/index.js'

	export let id="", 
		callback = browserBack,
		url = ''
</script>

<Button
	id={id}
	classes={['btn-fit', 'btn-l', 'btn-outline', 'btn-rect']}
	text="Cancel"
	{callback}
	{url}
/>
