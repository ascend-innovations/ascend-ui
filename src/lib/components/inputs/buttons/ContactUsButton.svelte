<script>
	import { Button } from '$lib/index.js'

	export let id='', url,
		classes = ['btn-fit', 'btn-l', 'btn-white', 'btn-rect']
</script>

<Button
	id={id}
	text="Contact Us"
	{classes}
	{url}
/>
