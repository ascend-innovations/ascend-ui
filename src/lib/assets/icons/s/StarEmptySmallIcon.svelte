<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [],
		colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="24"
	{styles}
>
	<path
		d="M12 2L15.1035 8.72839L22.4616 9.60081L17.0216 14.6316L18.4656 21.8992L12 18.28L5.53436 21.8992L6.97842 14.6316L1.53838 9.60081L8.89649 8.72839L12 2Z"
		stroke={colorOverride || '#6F6697'}
		stroke-width="2"
		stroke-linejoin="round"
	/>
</Icon>
