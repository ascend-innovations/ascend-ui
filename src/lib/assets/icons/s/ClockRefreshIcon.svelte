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
		d="M20.4523 12.8923C20.1745 15.5022 18.6957 17.948 16.2487 19.3607C12.1832 21.7079 6.98468 20.315 4.63747 16.2495L4.38747 15.8165M3.54519 11.1066C3.82299 8.49674 5.30178 6.05102 7.74877 4.63825C11.8143 2.29104 17.0128 3.68398 19.36 7.74947L19.61 8.18248M3.49219 18.0654L4.22424 15.3334L6.95629 16.0654M17.0412 7.93349L19.7733 8.66554L20.5053 5.93349M11.9988 7.49947V11.9995L14.4988 13.4995"
		stroke={palette.neutral}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</Icon>
