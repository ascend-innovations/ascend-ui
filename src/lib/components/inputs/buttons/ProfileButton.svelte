<script>
	import { Button, ProfileSmallIcon } from '$lib/index.js'

	export let id='', callback = undefined,
		url = ''
</script>

<Button
	id={id}
	classes={['btn-circle', 'btn-m', 'btn-outline']}
	leftIcon={ProfileSmallIcon}
	{callback}
	{url}
/>
