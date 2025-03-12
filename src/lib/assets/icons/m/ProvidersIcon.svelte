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
		d="M16.1691 3.46262C14.9894 2.04268 12.9222 1.65999 11.289 2.9591C9.6559 4.25821 9.32571 6.43125 10.4794 7.969C11.4062 9.20447 14.2032 11.7644 15.2669 12.723C15.4121 12.8539 15.4847 12.9193 15.5719 12.945C15.6478 12.9674 15.7326 12.9674 15.8108 12.9451C15.9006 12.9195 15.9798 12.8541 16.1381 12.7234C17.2984 11.7657 20.3532 9.20819 21.4045 7.97354C22.713 6.43682 22.6295 4.24994 21.0996 2.96318C19.5698 1.67643 17.4918 2.04372 16.1691 3.46262Z"
		fill-rule="evenodd"
		fill={colorOverride || palette.primary}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={colorOverride || palette.primary}
	/>
	<path
		d="M24.5 18C24.5 18 26.1697 14 28.5 14C28.975 14 29.2586 14 29.5699 14C30.2645 14 30.7476 14.6908 30.5092 15.3432L28.9755 19.5408C28.7455 20.1702 28.3611 20.7317 27.8576 21.1738L24.6323 24.0058C23.9025 24.6466 22.9644 25 21.9931 25H14L11.5 26.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<path
		d="M15 21H19C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17H14.2066C12.7704 17 11.3689 17.4418 10.1923 18.2654L7 20.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<rect
		height="10.7517"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
		transform="rotate(-36.9393 2.27826 21.9805)"
		width="4.34478"
		x="2.27826"
		y="21.9805"
	/>
</Icon>
