<script>
	import { ArrowLeftSmallIcon, Button, browserBack } from '$lib/index.js'

	export let id="", 
	arrow = true,
		callback = browserBack,
		classes = ['btn-fit', 'btn-m', 'btn-outline', 'btn-square'],
		text = ''
</script>

<Button
	id={id}
	{callback}
	{classes}
	leftIcon={arrow ? ArrowLeftSmallIcon : null}
	{text}
/>
