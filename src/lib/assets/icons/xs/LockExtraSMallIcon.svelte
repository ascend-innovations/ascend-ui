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
        d="M8 2C10.2091 2 12 3.79086 12 6V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.96435 15 2.113 14.2128 2.01074 13.2041L2 13V9C2 7.89543 2.89543 7 4 7V6C4 3.79086 5.79086 2 8 2ZM4 13H12V9H4V13ZM8 4C6.89543 4 6 4.89543 6 6V7H10V6C10 4.89543 9.10457 4 8 4Z" 
        fill="{palette.neural}"
    />
</Icon>