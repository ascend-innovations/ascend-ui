<script>
	import { Button, XCircleSmallIcon } from '$lib/index.js'

	export let callback,
		text = 'Clear'
</script>

<Button
	classes={['btn-outline', 'btn-rect', 'btn-m']}
	leftIcon={XCircleSmallIcon}
	styles={['height: 48px']}
	{text}
	{callback}
/>
