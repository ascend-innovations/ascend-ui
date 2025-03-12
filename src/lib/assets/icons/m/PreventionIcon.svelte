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
		d="M5 4H27V15.273C27 19.9788 24.2496 24.2502 19.9656 26.1974L16 28L12.0344 26.1974C7.75043 24.2502 5 19.9788 5 15.273V4Z"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linejoin="round"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M16.1011 11.246C14.9703 9.88499 12.9888 9.51817 11.4234 10.7634C9.85797 12.0086 9.54148 14.0916 10.6473 15.5656C11.5357 16.7498 14.459 19.2036 15.4787 20.1225C15.6178 20.2479 15.6874 20.3106 15.771 20.3352C15.8438 20.3567 15.925 20.3567 16 20.3353C16.086 20.3107 16.1619 20.2481 16.3137 20.1228C17.4259 19.2048 20.1117 16.7534 21.1194 15.5699C22.3737 14.0969 22.2936 12.0007 20.8272 10.7673C19.3608 9.53393 17.3689 9.88599 16.1011 11.246Z"
		fill={colorOverride || palette.primary}
		stroke={colorOverride || palette.primary}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
