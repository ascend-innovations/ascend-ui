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
		<div class="pill-container">
			<div class="tabs-container">
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

<style>
	.dashboard-page-title {
		width: 100%;
	}
	.pill-container {
		display: flex;
		justify-content: space-between;
		margin-top: var(--spacing09);
	}
	.tabs-container {
		width: 82.5%;
	}
</style>
