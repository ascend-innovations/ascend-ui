<script>
    import { getGlobalColorPalette } from '$lib/index.js'
    import { fade } from 'svelte/transition'
	import { onMount } from 'svelte'

	export let styles = []

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<div 
    class="page-loading-spinner" 
    style={styles.join(';')}
>
    <div class="spinner-container">
        <svg
            class="page-loading-spinner-spinner"
            width="19" 
            height="19" 
            viewBox="0 0 19 19" 
            fill="none"
        >
            <path 
                d="M9 1C10.1819 1 11.3522 1.23279 12.4442 1.68508C13.5361 2.13738 14.5282 2.80031 15.364 3.63604C16.1997 4.47177 16.8626 5.46392 17.3149 6.55585C17.7672 7.64778 18 8.8181 18 10" 
                stroke={palette.neutral} 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    </div>
    <p class="body-s neutral-400-text">Loading...</p>
</div>
