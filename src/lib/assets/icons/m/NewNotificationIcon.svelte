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
		d="M7 5C7 2.79086 8.79086 1 11 1H21C23.2091 1 25 2.79086 25 5V27C25 29.2091 23.2091 31 21 31H11C8.79086 31 7 29.2091 7 27V5Z"
		stroke={palette.neutral}
		stroke-width="2"
	/>
	<path
		d="M2 11C2 9.34315 3.34315 8 5 8H27C28.6569 8 30 9.34315 30 11V21C30 22.6569 28.6569 24 27 24H8L3.5547 26.9635C2.89014 27.4066 2 26.9302 2 26.1315V11Z"
		fill={colorOverride || palette.secondary}
	/>
	<path
		d="M16 20V12"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		d="M12 16L20 16"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
	/>
</Icon>
