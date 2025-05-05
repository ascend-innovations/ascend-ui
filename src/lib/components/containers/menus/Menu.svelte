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
	class={menuOpen ? 'menu-overlay--open' : 'menu-overlay--closed'}
	on:click={closeMenu}
	on:mousewheel={closeMenu}
/>
<div
	class={`menu ${menuOpen ? 'menu--open' : 'menu--closed'}`}
	transition:slide={{ axis: 'y' }}
>
	<div class="menu__header">
		<slot name="menu-header" />
	</div>
	<div class="menu__list">
		{#each menuList as menuItem}
			<div class="menu__button width-100">
				<Button
					classes={['btn-left', 'btn-full', 'btn-l', 'btn-white', 'btn-rect']}
					text={menuItem.name}
					url={menuItem.url}
				/>
			</div>
		{/each}
	</div>
	<div class="profile-menu__footer">
		<slot name="menu-footer" />
	</div>
</div>
