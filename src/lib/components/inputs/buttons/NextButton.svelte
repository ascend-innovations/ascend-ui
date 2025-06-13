<script>
	import { ArrowRightSmallIcon, Button, ProgressSpinner } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let id='', arrow = true,
		callback = null,
		classes = ['btn-fit', 'btn-m', 'btn-square', 'btn-outline'],
		disabled = false,
		icon = arrow ? ArrowRightSmallIcon : null,
		loading = false,
		preload,
		// loadingIcon = ProgressSpinner,
		text = '',
		url = ''

	// onMount(() => {
	// 	if (loading) icon = loadingIcon
	// 	else icon = arrow ? ArrowRightSmallIcon : null
	// })
</script>

<Button
	id={id}
	rightIcon={icon}
	{callback}
	{classes}
	{disabled}
	{loading}
	{preload}
	{text}
	{url}
/>
