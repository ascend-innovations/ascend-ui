<script>
	import { Button } from '$lib/index.js'

	export let id='', callback
</script>

<Button
	id={id}
	classes={['btn-fit', 'btn-m', 'btn-outline', 'btn-rect']}
	text="Logout"
	{callback}
/>
