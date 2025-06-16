<script>
	import { Button } from '$lib/index.js'

	export let id='', url = ''
</script>

<Button
	id={id}
	classes={['btn-m', 'btn-neutral', 'btn-square']}
	text="Continue"
	{url}
/>
