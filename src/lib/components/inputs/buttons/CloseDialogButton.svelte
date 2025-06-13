<script>
	import { Button, CloseSmallIcon } from '$lib/index.js'

	export let id='', callback
</script>

<Button
	id={id}
	{callback}
	classes={['btn-m', 'btn-outline', 'btn-square']}
	leftIcon={CloseSmallIcon}
/>
