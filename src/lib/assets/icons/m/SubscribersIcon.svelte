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
		d="M29 8C29 5.79086 27.2091 4 25 4H7C4.79086 4 3 5.79086 3 8V22C3 24.2091 4.79086 26 7 26H23L27.4453 28.9635C28.1099 29.4066 29 28.9302 29 28.1315V8Z"
		stroke={palette.neutral}
		stroke-width="2"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M16 14C17.6569 14 19 12.6569 19 11C19 9.34315 17.6569 8 16 8C14.3432 8 13 9.34315 13 11C13 12.6569 14.3432 14 16 14ZM22 22C22.5523 22 23.0087 21.5497 22.9397 21.0018C22.5278 17.7307 20.0266 16 16 16C11.9735 16 9.47225 17.7307 9.06039 21.0018C8.9914 21.5497 9.44774 22 10 22H22Z"
		fill={colorOverride || palette.secondary}
	/>
</Icon>
