<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="16"
	{styles}
>
	<path
		d="M13 5L5.99984 12L3 9"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
