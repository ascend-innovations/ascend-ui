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
						url: '/containers/accordions',
					},
					{
						text: 'ActionBars',
						url: '/containers/actionbars',
					},
					{
						text: 'Alerts',
						url: '/containers/alerts',
					},
					{
						text: 'Cards',
						url: '/containers/cards',
					},
					{
						text: 'Charts',
						url: '/containers/charts',
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
						url: '/containers/tooltips',
					},
					
				],
			},
			{
				startOpen: true,
				text: 'Inputs',
				url: '#',
				sublinks: [
					{
						text: 'Buttons',
						url: '/inputs/buttons'
					},
					{
						text: 'Checkboxes',
						url: '/inputs/checkboxes'
					},
					{
						text: 'Email',
						url: '/inputs/email'
					},
					{	
						text: 'Numbers',
						url: '/inputs/numbers'
					},
					{
						text: 'Radios',
						url: '/inputs/radio'
					},
					{
						text: 'Selectors',
						url: '/inputs/selectors'
					},
					{
						text: 'Text',
						url: '/inputs/text'
					},
					{
						text: 'Toggles',
						url: '/inputs/toggles',
					},
					{
						text: 'URLs',
						url: '/inputs/urls'
					},
					{
						text: 'Validation',
						url: '/inputs/validation'
					}
				]
			},
			{
				startOpen: true,
				text: 'Icons',
				url: '#',
				sublinks: [

				]
			}
		],
	}
</script>

<Shell>
	<!-- <NavBar
		keepOpen={true}
		openHeaderComponent={NavIcon}
		closedHeaderComponent={NavIcon}
		{navBarContents}
	/> -->
	<Main>
		<HeaderBar>
			<ProfileButton url="/" />
		</HeaderBar>
		<slot />
	</Main>
	<ToastArea />
</Shell>
