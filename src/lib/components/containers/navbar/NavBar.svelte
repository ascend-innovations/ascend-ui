<script>
	import { NavButton, ChevronDoubleLeftSmallIcon } from '$lib/index.js'
	import { slide } from 'svelte/transition'

	export let navClickCallback,
		navBarContents,
		preload,
		url = '/',
		closedHeaderComponent = undefined,
		openHeaderComponent = undefined
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class='navbar nav--open'
	transition:slide={{ axis: 'x' }}
>
	<div class="navbar__content">	
		<div class="navbar__content--upper">
			<div class="navbar__header">
				<div class="navbar__header--open">
					<a href={url}>
						<svelte:component this={openHeaderComponent} />
					</a>
					<button class='btn-fit btn-m btn-square btn-white navbar__toggle-button'>
						<ChevronDoubleLeftSmallIcon />
					</button>
				</div>
				<div class="navbar__header--closed">
					what
					<svelte:component this={closedHeaderComponent} />
				</div>
			</div>
			<div class="navbar__page-list">
				{#if navBarContents?.primaryPageList?.length}
					{#each navBarContents.primaryPageList as pageData}
						<div class="width-100">
							<NavButton
								callback={navClickCallback}
								{pageData}
								{preload}
							/>
						</div>
					{/each}
				{/if}
				{#if navBarContents?.secondaryPageList?.length}
					<div class="navbar__separator" />
					{#each navBarContents?.secondaryPageList as pageData}
						<div class="width-100">
							<NavButton
								callback={navClickCallback}
								{pageData}
								{preload}
							/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="navbar__content--lower">
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
