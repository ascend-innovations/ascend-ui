<script>
	import { PageHeader, TabBar, Button } from '$lib/index.js'

	export let title = '',
		titleButton = null,
		tabButton = null,
		tabList = [],
		currentTab = 0

	function handleTabSelection(event) {
		currentTab = event.detail.tabIndex
	}
</script>

<div class="dashboard-page-title">
	<PageHeader
		titleText={title}
		headerButton={titleButton}
		titleJustification={titleButton ? '' : 'space-between'}
		styles={['padding:0']}
	/>
	{#if tabList?.length}
		<div class="dashboard-pill-container">
			<div class="dashboard-tabs-container">
				<TabBar
					bind:tabList
					{currentTab}
					on:tabselect={(event) => handleTabSelection(event)}
				/>
			</div>
			<div class="tabs-button">
				<svelte:component this={tabButton} />
			</div>
		</div>
	{/if}
</div>
