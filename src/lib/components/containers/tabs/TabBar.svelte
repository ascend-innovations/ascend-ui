<script>
	import { ArrowLeftSmallIcon, ArrowRightSmallIcon, Button, Tab } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let currentTab, tabList

	let tabThing, tabBarMaxWidth, tabListWidth, tabOverflow, maxVisibleTabs, visibleTabsWidth

	const tabWidth = 144 // Tab.svelte min-width var(--spacing16) + .tab-list gap var(--spacing09)

	$: tabListWidth = (tabList?.length || 0) * tabWidth

	$: tabOverflow = tabListWidth > tabBarMaxWidth

	onMount(() => {
		tabThing = document.getElementsByClassName('tab-list')[0]

		tabBarMaxWidth = tabThing.clientWidth

		maxVisibleTabs = Math.floor(tabBarMaxWidth / tabWidth)

		visibleTabsWidth = maxVisibleTabs * tabWidth
	})

	function scrollLeft() {
		if (tabThing.scrollLeft === 0) {
			tabThing.scrollLeft = tabListWidth - tabWidth
		} else {
			tabThing.scrollLeft -= tabWidth
		}
	}

	function scrollRight() {
		if (tabThing.scrollLeft > tabListWidth - visibleTabsWidth) {
			tabThing.scrollLeft = 0
		} else {
			tabThing.scrollLeft += tabWidth
		}
	}
</script>

<div class="tab-bar">
	{#if tabOverflow}
		<div class="tab-nav-left-button">
			<Button
				callback={scrollLeft}
				classes={['btn-fit', 'btn-l', 'btn-square', 'btn-white']}
				topIcon={ArrowLeftSmallIcon}
			/>
		</div>
	{/if}
	<div class="tab-list">
		{#each tabList as tab, tabIndex (tab.name)}
			<Tab
				bind:tab
				icon={tab.icon}
				on:tabselect
				{currentTab}
				{tabIndex}
			/>
		{/each}
	</div>
	{#if tabOverflow}
		<div class="tab-nav-right-button">
			<Button
				callback={scrollRight}
				classes={['btn-fit', 'btn-l', 'btn-square', 'btn-white']}
				topIcon={ArrowRightSmallIcon}
			/>
		</div>
	{/if}
</div>

<style>
	.tab-bar {
		align-items: center;
		display: flex;
		max-height: var(--spacing13);
		width: 100%;
	}
	.tab-list {
		align-items: center;
		border-bottom: var(--border-neutral);
		display: flex;
		gap: var(--spacing09);
		overflow-x: hidden;
		padding-left: 1px;
		padding-top: 1px;
		width: 100%;
	}
	.tab-nav-left-button,
	.tab-nav-right-button {
		position: relative;
	}
	.tab-nav-left-button {
		left: 10px;
	}
	.tab-nav-right-button {
		right: 10px;
	}
</style>
