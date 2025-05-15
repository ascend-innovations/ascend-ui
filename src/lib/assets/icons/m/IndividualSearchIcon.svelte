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
        d="M8.5 23.5L2 30M29 15C29 21.6274 23.6274 27 17 27C10.3726 27 5 21.6274 5 15C5 8.37258 10.3726 3 17 3C23.6274 3 29 8.37258 29 15Z" 
        stroke="#140D31" 
        stroke-width="2" 
        stroke-linecap="round"
    />
    <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M16.9998 13C18.6567 13 19.9998 11.6569 19.9998 10C19.9998 8.34315 18.6567 7 16.9998 7C15.343 7 13.9998 8.34315 13.9998 10C13.9998 11.6569 15.343 13 16.9998 13ZM22.9998 21C23.5521 21 24.0084 20.5497 23.9394 20.0018C23.5276 16.7307 21.0263 15 16.9998 15C12.9732 15 10.472 16.7307 10.0601 20.0018C9.99115 20.5497 10.4475 21 10.9998 21H22.9998Z" 
        fill={colorOverride || palette.primary}
    />
</Icon>