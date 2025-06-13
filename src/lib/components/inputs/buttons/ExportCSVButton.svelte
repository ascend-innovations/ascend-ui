<script>
	import DownloadSmallIcon from '$lib/assets/icons/s/DownloadSmallIcon.svelte'
	import { Button } from '$lib/index.js'

	export let id='', callback,
		text = 'Export CSV'
</script>

<Button
	id={id}
	{callback}
	classes={['btn-outline', 'btn-m', 'btn-rect', 'semibold', 'btn-inline']}
	leftIcon={DownloadSmallIcon}
	{text}
/>
