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
		d="M26 6L21 19L11 14L6 26"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M26 10C28.2091 10 30 8.20914 30 6C30 3.79086 28.2091 2 26 2C23.7909 2 22 3.79086 22 6C22 8.20914 23.7909 10 26 10ZM6 30C8.20914 30 10 28.2091 10 26C10 23.7909 8.20914 22 6 22C3.79086 22 2 23.7909 2 26C2 28.2091 3.79086 30 6 30ZM24 19C24 20.6569 22.6569 22 21 22C19.3431 22 18 20.6569 18 19C18 17.3431 19.3431 16 21 16C22.6569 16 24 17.3431 24 19ZM11 17C12.6569 17 14 15.6569 14 14C14 12.3431 12.6569 11 11 11C9.34315 11 8 12.3431 8 14C8 15.6569 9.34315 17 11 17Z"
		fill={colorOverride || palette.secondary}
	/>
</Icon>
