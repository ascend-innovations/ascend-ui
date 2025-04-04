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
		d="M31 21C31 19.8954 30.1046 19 29 19H13C11.8954 19 11 19.8954 11 21V25C11 26.1046 11.8954 27 13 27H25L29.4453 29.9635C30.1099 30.4066 31 29.9302 31 29.1315V21Z"
		stroke={palette.neutral}
		stroke-width="2"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M0 4C0 2.34315 1.34315 1 3 1H25C26.6569 1 28 2.34315 28 4V12C28 13.6569 26.6569 15 25 15H6L1.5547 17.9635C0.890145 18.4066 0 17.9302 0 17.1315V4ZM4 6C4 5.44772 4.44772 5 5 5H23C23.5523 5 24 5.44772 24 6C24 6.55228 23.5523 7 23 7H5C4.44772 7 4 6.55228 4 6ZM5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44772 11 5 11H15C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9H5Z"
		fill={colorOverride || palette.secondary}
	/>
</Icon>
