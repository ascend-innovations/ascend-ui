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
		d="M14.6365 6.93605C12.0402 3.74175 7.60222 2.78808 4.18109 5.5667C0.75996 8.34532 0.169599 13.1205 2.7165 16.5733C4.76276 19.3473 10.8756 25.1416 13.1997 27.3124C13.5169 27.6087 13.6755 27.7568 13.8631 27.8181C14.0266 27.8715 14.2079 27.8761 14.3738 27.831C14.5643 27.7792 14.73 27.6393 15.0615 27.3594C17.4903 25.3086 23.8826 19.83 26.0638 17.1627C28.7787 13.8428 28.4841 9.01515 25.1466 6.09603C21.8091 3.17691 17.3878 3.87677 14.6365 6.93605Z"
		fill-rule="evenodd"
		fill={colorOverride || palette.primary}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={colorOverride || palette.primary}
	/>
	<path
		d="M31 20.5H26.9273L24.9636 26L21.0364 15L19.0727 20.5H15"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
</Icon>
