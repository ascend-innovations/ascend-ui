<script>
	import { TabBar } from '$lib/index.js'

	export let currentTab, tabList

	function handleTabSelection(event) {
		currentTab = event.detail.tabIndex
	}
</script>

<div class="tab-container">
	<TabBar
		{currentTab}
		{tabList}
		on:tabselect={(event) => handleTabSelection(event)}
	/>
	<div class="width-100">
		{#if tabList[currentTab]?.content && tabList[currentTab]?.data}
			<svelte:component
				this={tabList[currentTab].content}
				data={tabList[currentTab].data}
			/>
		{/if}
	</div>
</div>
