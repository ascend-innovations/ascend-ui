<script>
	import { Button, SubNavButton, NavButtonChevronDownIcon, NavButtonChevronUpIcon } from '$lib/index.js'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	export let pageData = undefined,
		navBarOpen,
		open = false

	function toggleSubNav() {
		open = !open
	}

	onMount(() => {
		if (pageData.startOpen === true) open = true
	})

	$: currentPageLink = $page.url.pathname.includes(pageData?.url)
</script>

<div class="navbar-button-wrapper">
	<div class="indicator-wrapper">
		<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`} />
		<div class="navbar-button">
			<Button
				callback={toggleSubNav}
				classes={['btn-left', 'btn-full', 'btn-l', 'btn-white']}
				leftIcon={pageData?.icon ?? null}
				text={navBarOpen ? pageData?.text : ''}
				url={pageData?.url ?? ''}
				rightIcon={pageData.sublinks?.length > 0 ? (open ? NavButtonChevronUpIcon : NavButtonChevronDownIcon) : ''}
			/>
		</div>
	</div>
	{#if pageData.sublinks?.length > 0}
		<div class="sub-nav-wrapper {open ? 'open' : 'closed'}">
			{#each pageData.sublinks as sublink}
				<SubNavButton {sublink} />
			{/each}
		</div>
	{/if}
</div>
