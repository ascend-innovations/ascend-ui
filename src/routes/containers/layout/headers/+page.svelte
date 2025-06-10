<script>
	import { DashboardPageTitle, CardGridIcon, MapPinIcon, ExportCSVButton, NextButton, FilterAndSortButton } from '$lib/index.js'

	const tabList = [
		{ name: 'One', url: '/containers/layout/headers', icon: CardGridIcon, content: NextButton },
		{ name: 'Two', url: '/containers/layout/headers', icon: CardGridIcon, content: NextButton },
		{ name: 'Three', url: '/inputs/toggles', icon: MapPinIcon, content: NextButton },
		{ name: 'Four', url: '/containers/layout/headers', icon: MapPinIcon, content: NextButton },
		{ name: 'Five', url: '/containers/layout/headers', icon: MapPinIcon, content: NextButton },
		{ name: 'Six', url: '/containers/layout/headers', icon: MapPinIcon, content: NextButton },
		{ name: 'Seven', url: '/containers/layout/headers', icon: MapPinIcon, content: NextButton },
	]
</script>

<DashboardPageTitle
	title="Page Title"
	titleButton={ExportCSVButton}
	tabButton={FilterAndSortButton}
	{tabList}
/>
