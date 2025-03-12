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
		d="M21 8V4C21 2.89543 21.8954 2 23 2H24C25.1046 2 26 2.89543 26 4V11L21 8Z"
		stroke={palette.whiteTrans}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M4 26V11.6774L14.9221 4.68959C15.5792 4.2692 16.4208 4.2692 17.0779 4.68959L28 11.6774V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26Z"
		stroke={palette.whiteTrans}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M17.0908 2.70985L31.1259 11.843C31.6711 12.1978 32 12.8041 32 13.4546C32 14.9807 30.3075 15.8986 29.0284 15.0663L16 6.58824L2.9716 15.0663C1.69248 15.8986 0 14.9807 0 13.4546C0 12.8041 0.328872 12.1978 0.874082 11.843L14.9092 2.70985C15.5724 2.27828 16.4276 2.27828 17.0908 2.70985Z"
		fill={colorOverride || palette.secondary}
	/>
	<path
		d="M12 28V21C12 19.8954 12.8954 19 14 19H18C19.1046 19 20 19.8954 20 21V28H12Z"
		fill={colorOverride || palette.secondary}
		stroke={palette.whiteTrans}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
