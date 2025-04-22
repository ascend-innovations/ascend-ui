<script>
	import { getGlobalColorPalette, Icon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let styles = [], colorOverride

	let palette = {}

	onMount(() => (palette = getGlobalColorPalette()))
</script>

<Icon
	size="16"
	{styles}
>
	<path
		clip-rule="evenodd"
		d="M8.70693 13.7071C8.51939 13.8947 8.26504 14 7.99982 14C7.7346 14 7.48025 13.8946 7.29272 13.7071L2.29288 8.70709C1.90236 8.31656 1.90237 7.6834 2.2929 7.29288C2.68344 6.90236 3.3166 6.90237 3.70712 7.2929L7 10.5859V3C7 2.44771 7.44772 2 8 2C8.55228 2 9 2.44771 9 3V10.5857L12.2929 7.29288C12.6834 6.90236 13.3166 6.90237 13.7071 7.2929C14.0976 7.68344 14.0976 8.3166 13.7071 8.70712L8.70693 13.7071Z"
		fill-rule="evenodd"
		fill={colorOverride || palette.neutral}
	/>
</Icon>
