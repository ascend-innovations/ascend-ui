<script>
	import { Page, PageBody, TabBar } from '$lib/index.js'

	const tabList = [
		{ name: 'A' },
		{ name: 'B' },
		{ name: 'C' },
		{ name: 'D' },
		{ name: 'E' },
		{ name: 'F' },
		{ name: 'G' },
		{ name: 'H' },
		{ name: 'I' },
		{ name: 'J' },
		{ name: 'K' },
		{ name: 'L' },
		{ name: 'M' },
	]
</script>

<Page>
	<PageBody size="full">
		<TabBar {tabList} />
	</PageBody>
</Page>
