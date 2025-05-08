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

	$: currentPageLink = pageData.url === '/' ? $page.url.pathname === '/' : $page.url.pathname.includes(pageData?.url)
</script>

<div class="navbar-button-wrapper">
	<div class="indicator-wrapper">
		<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`} />
		<div class="nav-button">
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

<style>
	.navbar-button-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.nav-button {
		width: 100%;
	}
	.indicator-wrapper {
		display: flex;
	}
	.current-page-indicator {
		width: var(--spacing02);
		border-radius: var(--border-radius-s);
	}
	.current-page-link {
		background-color: var(--primary-base);
	}
	.sub-nav-wrapper {
		margin-top: var(--spacing03);
		overflow-y: hidden;
	}
	.closed {
		height: 0;
	}
</style>
