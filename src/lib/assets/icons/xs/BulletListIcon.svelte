<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	let palette = {}
	export let colorOverride = null,
		styles = []

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="14"
	{styles}
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2ZM5 0C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2H13C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0H5ZM5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H13C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H5ZM4 11C4 10.4477 4.44772 10 5 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H5C4.44772 12 4 11.5523 4 11ZM2 6C2 6.55228 1.55228 7 1 7C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5C1.55228 5 2 5.44772 2 6ZM1 12C1.55228 12 2 11.5523 2 11C2 10.4477 1.55228 10 1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12Z"
		fill={colorOverride || palette.neutral}
	/>
</Icon>
