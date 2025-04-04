<script>
	import { LogoutMenuButton, Menu, ProfileIcon } from '$lib/index.js'

	export let username = '',
		role = '',
		logoutCallback,
		menuOpen,
		menuList = [
			{
				name: 'Profile',
				url: '/profile',
			},
			{
				name: 'Terms & Conditions',
				url: 'https://ascend-innovations.com/legal/terms-and-conditions',
			},
			{
				name: 'Privacy Policy',
				url: 'https://ascend-innovations.com/legal/privacy-policy',
			},
		]
</script>

<Menu
	bind:menuOpen
	{menuList}
>
	<div
		class="menu-header"
		slot="menu-header"
	>
	    <div class="profile-container">
            <ProfileIcon />
            <div class="user-info">
                {`${username} ${role}`}
            </div>
	    </div>
		{#if $$slots['profile-switcher']}
			<div class="profile-switcher">
				<slot name="profile-switcher" />
			</div>
		{/if}
    </div>
	<div
		class="menu-footer"
		slot="menu-footer"
	>
		<LogoutMenuButton callback={logoutCallback} />
	</div>
</Menu>

<style>
	.menu-header {
		display: flex;
		flex-direction: column;
		gap: var(--spacing05);
	}
	.profile-container {
		display: flex;
		gap: var(--spacing05);
	}
	.user-info {
		display: flex;
		flex-direction: column;
	}
	.profile-switcher {
		padding: var(--spacing06);
	}
</style>
