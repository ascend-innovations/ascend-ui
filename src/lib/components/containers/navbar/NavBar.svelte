<script>
	import { NavBarHeader, NavButton } from '$lib/index.js'
	import { slide } from 'svelte/transition'

	export let callback = null,
		hoverOpen = false,
		keepOpen = true,
		navBarContents,
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
				{keepOpen}
				{navBarOpen}
				{toggleNavbar}
				{closedHeaderComponent}
				{openHeaderComponent}
				{url}
			/>
			<div class="nav-page-list">
				{#if navBarContents?.primaryPageList?.length}
					{#each navBarContents.primaryPageList as pageData}
						<div class="nav-button">
							<NavButton
								{callback}
								{pageData}
								{navBarOpen}
							/>
						</div>
					{/each}
				{/if}
				{#if navBarContents?.secondaryPageList?.length}
					<div class="navbar-separator" />
					{#each navBarContents?.secondaryPageList as pageData}
						<div class="nav-button">
							<NavButton
								{callback}
								{pageData}
								{navBarOpen}
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
