<script>
	import { ArrowRightSmallIcon, Button, ProgressSpinner } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let arrow = true,
		callback = null,
		classes = ['btn-fit', 'btn-l', 'btn-outline', 'btn-square'],
		disabled = false,
		icon = arrow ? ArrowRightSmallIcon : null,
		loading = false,
		// loadingIcon = ProgressSpinner,
		text = '',
		url = ''

	// onMount(() => {
	// 	if (loading) icon = loadingIcon
	// 	else icon = arrow ? ArrowRightSmallIcon : null
	// })
</script>

<Button
	rightIcon={icon}
	{callback}
	{classes}
	{disabled}
	{loading}
	{text}
	{url}
/>
