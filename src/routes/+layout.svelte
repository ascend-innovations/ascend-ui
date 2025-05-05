<script>
	import './styles.css'
	import { AscendLogoIcon, HeaderBar, HomeIcon, Main, NavBar, ProfileButton, Shell, TemplatesIcon, ToastArea } from '$lib/index.js'
	import Page from './+page.svelte'
	import PageBody from '$lib/components/containers/pages/PageBody.svelte'

	const NavIcon = AscendLogoIcon

	const navBarContents = {
		primaryPageList: [
			{
				startOpen: true,
				text: 'Containers',
				url: '#',
				sublinks: [
					{
						text: 'Accordions',
						url: '/containers/accordions/',
					},
					{
						text: 'ActionBars',
						url: '/containers/actionbars',
					},
					{
						text: 'Alerts',
						url: '/containers/alerts/',
					},
					{
						text: 'Cards',
						url: '/containers/cards',
					},
					{
						text: 'Charts',
						url: '/containers/charts/',
					},
					{
						text: 'Labels',
						url: '/containers/labels',
					},
					{
						text: 'Menus',
						url: '/containers/menus',
					},
					{
						text: 'Progress',
						url: '/containers/progress'
					},
					{
						text: 'Tables',
						url: '/containers/tables'
					},
					{
						text: 'Tabs',
						url: '/containers/tabs'
					},
					{
						text: 'Tags',
						url: '/containers/tags'
					},
					{
						text: 'Text',
						url: '/containers/text'
					},
					{
						text: 'Toasts',
						url: '/containers/toasts'
					},
					{
						text: 'Tooltips',
						url: '/containers/tooltips/',
					},
					
				],
			},
			{
				text: 'Inputs',
				url: '#',
				sublinks: [
					{
						text: 'Toggles',
						url: '/containers/toggles',
					},
				]
			},
			{
				text: 'Icons',
				url: '#',
				sublinks: [

				]
			}
		],
	}
</script>

<Shell>
	<NavBar
		keepOpen={true}
		openHeaderComponent={NavIcon}
		closedHeaderComponent={NavIcon}
		{navBarContents}
	/>
	<Main>
		<HeaderBar>
			<ProfileButton url="/" />
		</HeaderBar>
		<slot />
	</Main>
	<ToastArea />
</Shell>
