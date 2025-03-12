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
		d="M4 28.0009H28M8 24.0009V13.3343M13.3333 24.0009V13.3343M18.6667 24.0009V13.3343M24 24.0009V13.3343M26.6667 9.33428L16.5653 3.02094C16.3602 2.89276 16.2577 2.82867 16.1477 2.80368C16.0505 2.78159 15.9495 2.78159 15.8523 2.80368C15.7423 2.82867 15.6398 2.89276 15.4347 3.02094L5.33333 9.33428H26.6667Z"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<path
		d="M15.4346 3.01899C15.6397 2.89081 15.7423 2.82672 15.8523 2.80173C15.9495 2.77963 16.0505 2.77963 16.1477 2.80173C16.2577 2.82672 16.3602 2.89081 16.5653 3.01899L26.6666 9.33232H5.33331L15.4346 3.01899Z"
		fill={palette.primary}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={colorOverride || palette.primary}
	/>
</Icon>
