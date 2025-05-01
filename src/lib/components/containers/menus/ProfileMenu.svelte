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
		<div class="menu-user-profile-container">
			<ProfileIcon />
			<div class="user-info">
				{`${username} ${role}`}
			</div>
		</div>
		{#if $$slots['profile-switcher']}
			<div class="menu-profile-switcher">
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
