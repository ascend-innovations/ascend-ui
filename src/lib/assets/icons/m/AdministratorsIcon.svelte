<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [],
		colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="32"
	{styles}
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M13 0C10.2386 0 8 2.23858 8 5V10C5.23858 10 3 12.2386 3 15V26C3 28.7614 5.23858 31 8 31H24C26.7614 31 29 28.7614 29 26V15C29 12.2386 26.7614 10 24 10V5C24 2.23858 21.7614 0 19 0H13ZM22 10V5C22 3.34315 20.6569 2 19 2H13C11.3431 2 10 3.34315 10 5V10H22ZM9 12H8C6.34315 12 5 13.3431 5 15V26C5 27.6569 6.34315 29 8 29H24C25.6569 29 27 27.6569 27 26V15C27 13.3431 25.6569 12 24 12H23H9Z"
		fill={palette.neutral}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M18 22.4649C19.1956 21.7733 20 20.4806 20 19C20 16.7909 18.2091 15 16 15C13.7909 15 12 16.7909 12 19C12 20.4806 12.8044 21.7733 14 22.4649V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V22.4649Z"
		fill={colorOverride || palette.secondary}
	/>
</Icon>
