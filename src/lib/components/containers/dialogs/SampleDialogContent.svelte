<script>
	import { OkButton } from '$lib/index.js'
	import { getContext } from 'svelte'

	const closeDialog = getContext('Dialog')
</script>

<div class="sample-dialog">
	<p>Sample dialog content</p>
	<p>More sample dialog content</p>
	<OkButton callback={closeDialog} />
</div>
