<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [], colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="32"
	{styles}
>
	<path
		clip-rule="evenodd"
		d="M14.4 8C13.5163 8 12.8 8.71634 12.8 9.6V12.8H9.6C8.71634 12.8 8 13.5163 8 14.4V17.6C8 18.4837 8.71634 19.2 9.6 19.2H12.8V22.4C12.8 23.2837 13.5163 24 14.4 24H17.6C18.4837 24 19.2 23.2837 19.2 22.4V19.2H22.4C23.2837 19.2 24 18.4837 24 17.6V14.4C24 13.5163 23.2837 12.8 22.4 12.8H19.2V9.6C19.2 8.71634 18.4837 8 17.6 8H14.4Z"
		fill-rule="evenodd"
		fill={colorOverride || palette.primary}
	/>
	<path
		d="M16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 14.6044 3.21992 13.2601 3.627 12M9.39758 4.79905C9.26349 4.87826 9.13094 4.9598 9 5.04364M6.5 7.12581C5.98511 7.67678 5.51759 8.27257 5.10394 8.90669"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={colorOverride || palette.primary}
	/>
	<path
		d="M17.5332 1.09961L15.5 3.13216L17.4669 5.09961"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
</Icon>
