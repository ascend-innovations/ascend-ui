<script>
	import { NavBarHeader, NavButton } from '$lib/index.js'
	import { slide } from 'svelte/transition'

	export let navClickCallback,
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
	class={`navbar ${navBarOpen ? 'open' : 'closed'}`}
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
				{toggleNavbar}
				{url}
			/>
			<div class="page-list">
				{#if navBarContents?.primaryPageList?.length}
					{#each navBarContents.primaryPageList as pageData}
						<div class="nav-button">
							<NavButton
								callback={navClickCallback}
								{navBarOpen}
								{pageData}
							/>
						</div>
					{/each}
				{/if}
				{#if navBarContents?.secondaryPageList?.length}
					<div class="separator" />
					{#each navBarContents?.secondaryPageList as pageData}
						<div class="nav-button">
							<NavButton
								callback={navClickCallback}
								{navBarOpen}
								{pageData}
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

<style>
	.navbar {
		background: var(--background-base);
		color: var(--white-900);
		display: flex;
		flex-direction: column;
		gap: var(--spacing09);
		height: 100vh;
		max-width: var(--spacing21);
		scrollbar-width: var(--spacing02);
		z-index: 405;
	}
	.navbar:hover {
		box-shadow:
			0px var(--spacing02) var(--spacing02) var(--neutral-trans-400),
			0px var(--spacing01) var(--spacing02) calc(-1 * var(--spacing02)) var(--neutral-trans-050);
		min-width: var(--container-max-width-s);
	}
	.navbar-content {
		display: flex;
		flex-direction: column;
		height: var(--spacing33);
		justify-content: space-between;
		max-height: 100vh;
		overflow-y: auto;
	}
	.nav-button {
		width: 100%;
	}
	.page-list {
		align-items: flex-start;
		background-color: var(--background-base);
		display: flex;
		flex-direction: column;
		gap: var(--spacing01);
		width: 100%;
		padding: 0 var(--spacing06);
	}
	.open {
		min-width: var(--container-max-width-s);
	}
	.closed {
		width: var(--spacing15);
	}
	.separator {
		background-color: var(--neutral-100);
		height: var(--spacing00);
		width: 90%;
	}
	.navbar-lower-content {
		padding: var(--spacing06);
	}
</style>
