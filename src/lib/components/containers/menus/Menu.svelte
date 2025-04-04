<script>
	import { Button } from '$lib/index.js'
	import { slide } from 'svelte/transition'
	import { beforeNavigate } from '$app/navigation'

	export let menuOpen = false,
		menuList = []

	function closeMenu() {
		menuOpen = false
	}

	beforeNavigate(() => (menuOpen = false))
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
	class={menuOpen ? 'open-overlay' : 'closed-overlay'}
	on:click={closeMenu}
	on:mousewheel={closeMenu}
/>
<div
	class={`menu ${menuOpen ? 'open' : 'closed'}`}
	transition:slide={{ axis: 'y' }}
>
	<div class="menu-header">
		<slot name="menu-header" />
	</div>
	<div class="menu-list">
		{#each menuList as menuItem}
			<div class="menu-button">
				<Button
					classes={['btn-left', 'btn-full', 'btn-l', 'btn-white', 'btn-rect']}
					text={menuItem.name}
					url={menuItem.url}
				/>
			</div>
		{/each}
	</div>
	<div class="menu-footer">
		<slot name="menu-footer" />
	</div>
</div>

<style>
	.open-overlay {
		bottom: 0;
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 410;
	}
	.closed-overlay {
		display: none;
	}
	.menu {
		background-color: var(--white-base);
		border-radius: 0 0 var(--spacing11) var(--spacing11);
		border: var(--spacing00) solid var(--neutral-100);
		color: var(--white-900);
		position: absolute;
		right: var(--spacing09);
		top: var(--spacing14);
		width: var(--spacing21);
		z-index: 410;
	}
	.menu-header {
		display: flex;
		justify-content: space-between;
		padding: var(--spacing09) var(--spacing06) var(--spacing09) var(--spacing10);
	}
	.menu-button {
		width: 100%;
	}
	.menu-list {
		align-items: flex-start;
		background-color: var(--background-base);
		display: flex;
		flex-direction: column;
		gap: var(--spacing01);
		width: 100%;
		padding: 0 var(--spacing06);
	}
	.open {
		display: block;
	}
	.closed {
		display: none;
	}
	.menu-footer {
		padding: var(--spacing06);
	}
</style>
