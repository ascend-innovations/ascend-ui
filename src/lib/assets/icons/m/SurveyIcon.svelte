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
		d="M7 6V5C6.44772 5 6 5.44772 6 6H7ZM7 27V28C7.55228 28 8 27.5523 8 27H7ZM3 27H2C2 27.5523 2.44772 28 3 28V27ZM7 7H25.5V5H7V7ZM6 6V27H8V6H6ZM7 26H3V28H7V26ZM4 27V6H2V27H4ZM4 6V5.50001H2V6H4ZM2 4.94737V5.50001H4V4.94737H2ZM6.94737 0C4.21501 0 2 2.21501 2 4.94737H4C4 3.31958 5.31958 2 6.94737 2V0ZM25.5 0H6.94737V2H25.5V0ZM29 3.5C29 1.567 27.433 0 25.5 0V2C26.3284 2 27 2.67157 27 3.5H29ZM25.5 7C27.433 7 29 5.433 29 3.5H27C27 4.32843 26.3284 5 25.5 5V7Z"
		fill={palette.neutral}
	/>
	<path
		d="M7 6H26V29H7V6Z"
		stroke-linejoin="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<path
		d="M12 11H21"
		stroke-linecap="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<path
		d="M12 15H18"
		stroke-linecap="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
	<path
		d="M13.0379 25.8107C13.1283 25.3583 13.1736 25.132 13.2563 24.921C13.3298 24.7338 13.425 24.5558 13.5401 24.3909C13.6697 24.205 13.8329 24.0418 14.1592 23.7155L24.8132 13.0615C26.2285 11.6462 28.5232 11.6462 29.9385 13.0615C31.3538 14.4768 31.3538 16.7715 29.9385 18.1868L19.2845 28.8408C18.9582 29.1671 18.795 29.3303 18.6091 29.4599C18.4442 29.575 18.2662 29.6702 18.079 29.7437C17.868 29.8264 17.6417 29.8717 17.1893 29.9621L12 31L13.0379 25.8107Z"
		fill={colorOverride || palette.primary}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke={colorOverride || palette.primary}
	/>
	<path
		d="M7 6C8.38071 6 9.5 4.88071 9.5 3.5C9.5 2.11929 8.38071 1 7 1"
		stroke-linecap="round"
		stroke-width="2"
		stroke={palette.neutral}
	/>
</Icon>
