<script>
	import { NavBarHeader, NavButton } from '$lib/index.js'
	import { slide } from 'svelte/transition'

	export let navClickCallback,
		hoverOpen = false,
		keepOpen = true,
		navBarContents,
		preload,
		url = '/',
		closedHeaderComponent = undefined,
		openHeaderComponent = undefined

	$: navBarOpen = hoverOpen || keepOpen

	function toggleNavbar() {
		keepOpen = !keepOpen
	}

	function openNavbar() {
		hoverOpen = true
	}

	function closeNavbar() {
		hoverOpen = false
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`navbar ${navBarOpen ? 'nav-open' : 'nav-closed'}`}
	transition:slide={{ axis: 'x' }}
	on:mouseenter={openNavbar}
	on:focus={openNavbar}
	on:mouseleave={closeNavbar}
	on:blur={closeNavbar}
>
	<div class="navbar-content">
		<div class="navbar-upper-content">
			<NavBarHeader
				{closedHeaderComponent}
				{keepOpen}
				{navBarOpen}
				{openHeaderComponent}
				{preload}
				{toggleNavbar}
				{url}
			/>
			<div class="nav-page-list">
				{#if navBarContents?.primaryPageList?.length}
					{#each navBarContents.primaryPageList as pageData}
						<div class="width-100">
							<NavButton
								callback={navClickCallback}
								{navBarOpen}
								{pageData}
								{preload}
							/>
						</div>
					{/each}
				{/if}
				{#if navBarContents?.secondaryPageList?.length}
					<div class="navbar-separator" />
					{#each navBarContents?.secondaryPageList as pageData}
						<div class="width-100">
							<NavButton
								callback={navClickCallback}
								{navBarOpen}
								{pageData}
								{preload}
							/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="navbar-lower-content">
			{#if navBarContents?.bottomButtonLarge && navBarContents?.bottomButtonSmall}
				{#if navBarOpen}
					<svelte:component this={navBarContents?.bottomButtonLarge} />
				{:else}
					<svelte:component this={navBarContents?.bottomButtonSmall} />
				{/if}
			{/if}
		</div>
	</div>
</div>
