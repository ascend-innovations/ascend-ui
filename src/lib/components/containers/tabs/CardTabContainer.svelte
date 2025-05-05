<script>
	import { TabBar } from '$lib/index.js'

	export let currentTab, tabList

	function handleTabSelection(event) {
		currentTab = event.detail.tabIndex
	}
</script>

<div class="card-tab-container">
	<TabBar
		{currentTab}
		{tabList}
		on:tabselect={(event) => handleTabSelection(event)}
	/>
	<div class="card-tab-container__content">
		<svelte:component this={tabList[currentTab].content} />
	</div>
</div>
