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
	<path
		clip-rule="evenodd"
		d="M8.70693 2.29288C8.51939 2.10535 8.26504 2 7.99982 2C7.7346 2 7.48025 2.10537 7.29272 2.2929L2.29288 7.29291C1.90236 7.68344 1.90237 8.3166 2.2929 8.70712C2.68344 9.09764 3.3166 9.09763 3.70712 8.7071L7 5.41411V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V5.41432L12.2929 8.70712C12.6834 9.09764 13.3166 9.09763 13.7071 8.7071C14.0976 8.31656 14.0976 7.6834 13.7071 7.29288L8.70693 2.29288Z"
		fill-rule="evenodd"
		fill={colorOverride || palette.neutral}
	/>
</Icon>
