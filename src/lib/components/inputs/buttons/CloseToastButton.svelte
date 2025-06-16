<script>
	import { Button, CloseSmallWhiteIcon } from '$lib/index.js'

	export let id='', callback
</script>

<Button
	id={id}
	{callback}
	classes={['btn-close-toast']}
	leftIcon={CloseSmallWhiteIcon}
/>
