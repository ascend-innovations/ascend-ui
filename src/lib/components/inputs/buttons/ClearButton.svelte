<script>
	import { Button, XCircleSmallIcon } from '$lib/index.js'

	export let id="", callback,
		text = 'Clear'
</script>

<Button
	id={id}
	classes={['btn-outline', 'btn-rect', 'btn-m']}
	leftIcon={XCircleSmallIcon}
	styles={['height: 48px']}
	{text}
	{callback}
/>
