<script>
	import ToggleButton from '$lib/components/inputs/toggles/ToggleButton.svelte'
	import {
		Page,
		PageBody,
		ToggleSwitch,
		ChevronDoubleLeftSmallIcon,
		ChevronDoubleRightSmallIcon,
	} from '$lib/index.js'
</script>

<Page>
	<PageBody size="full">
		<h1>Toggles</h1>
		<ToggleSwitch />

		<ToggleButton />
	</PageBody>
</Page>
