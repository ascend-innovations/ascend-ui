<script>
	import { Button, Dialog } from '$lib/index.js'

	let button,
		open = false,
		title = 'Sample Dialog'
</script>

<Button
	bind:this={button}
	callback={() => (open = true)}
	text="Show Dialog"
/>
