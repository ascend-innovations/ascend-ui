<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="24"
	{styles}
>
	<path
		d="M17.5 11.5V5.8C17.5 4.11984 17.5 3.27976 17.173 2.63803C16.8854 2.07354 16.4265 1.6146 15.862 1.32698C15.2202 1 14.3802 1 12.7 1H6.3C4.61984 1 3.77976 1 3.13803 1.32698C2.57354 1.6146 2.1146 2.07354 1.82698 2.63803C1.5 3.27976 1.5 4.11984 1.5 5.8V16.2C1.5 17.8802 1.5 18.7202 1.82698 19.362C2.1146 19.9265 2.57354 20.3854 3.13803 20.673C3.77976 21 4.61984 21 6.3 21H9.5M11.5 10H5.5M7.5 14H5.5M13.5 6H5.5M12 18L14 20L18.5 15.5"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
