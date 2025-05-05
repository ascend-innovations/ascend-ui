<script>
	import { Button, SubNavButton, NavButtonChevronDownIcon, NavButtonChevronUpIcon } from '$lib/index.js'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	export let callback,
		navBarOpen,
		open = false,
		pageData = undefined,
		preload

	function toggleSubNav() {
		open = !open
	}

	onMount(() => {
		if (pageData.startOpen === true) open = true
	})

	$: currentPageLink = $page.url.pathname.includes(pageData?.url)
</script>

<div class="navbar-button-wrapper width-100">
	<div class="nav-indicator-wrapper">
		<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`} />
		<div class="width-100">
			<Button
				callback={pageData.sublinks?.length > 0 ? toggleSubNav : callback}
				classes={['btn-left', 'btn-full', 'btn-l', 'btn-white', 'btn-nav-hover']}
				leftIcon={pageData?.icon ?? null}
				text={navBarOpen ? pageData?.text : ''}
				url={pageData?.url ?? ''}
				styles={['text-decoration: none']}
				rightIcon={pageData.sublinks?.length > 0 ? (open ? NavButtonChevronUpIcon : NavButtonChevronDownIcon) : ''}
			/>
		</div>
	</div>
	{#if pageData.sublinks?.length > 0}
		<div class="sub-nav-wrapper {open ? 'open' : 'closed'}">
			{#each pageData.sublinks as sublink}
				<SubNavButton
					{callback}
					{sublink}
					{preload}
				/>
			{/each}
		</div>
	{/if}
</div>
