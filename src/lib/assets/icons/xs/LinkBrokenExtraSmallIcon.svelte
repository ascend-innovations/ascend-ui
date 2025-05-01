<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [],
		colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="16"
	{styles}
>
    <g clip-path="url(#clip0_22904_135321)">
        <path 
            d="M6.00016 2.66665V1.33331M10.0002 13.3333V14.6666M2.66683 5.99998H1.3335M13.3335 9.99998H14.6668M3.27631 3.27612L2.3335 2.33331M12.724 12.7238L13.6668 13.6666M8.00016 11.7712L6.58595 13.1854C5.54455 14.2268 3.85611 14.2268 2.81471 13.1854C1.77331 12.144 1.77331 10.4556 2.81471 9.41419L4.22893 7.99998M11.7714 7.99998L13.1856 6.58577C14.227 5.54437 14.227 3.85593 13.1856 2.81453C12.1442 1.77313 10.4558 1.77313 9.41438 2.81453L8.00016 4.22874" 
            stroke={colorOverride || palette.neutral} 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
    </g>
    <defs>
        <clipPath id="clip0_22904_135321">
            <rect width="16" height="16" fill="white"/>
        </clipPath>
    </defs>
</Icon>