<script>
	import './styles.css'
	import {
		AscendLogoIcon,
		HeaderBar,
		HomeIcon,
		Main,
		NavBar,
		ProfileButton,
		Shell,
		TemplatesIcon,
		ToastArea,
	} from '$lib/index.js'

	const NavIcon = AscendLogoIcon

	const navBarContents = {
		primaryPageList: [
			{
				startOpen: true,
				icon: HomeIcon,
				text: 'Containers',
				url: '/',
				sublinks: [
					{
						text: 'Alerts',
						url: '/containers/alerts/',
					},
					{
						text: 'Charts',
						url: '/containers/charts/',
					},
					{
						text: 'Tooltips',
						url: '/containers/tooltips/',
					},
					{
						text: 'Accordions',
						url: '/containers/accordions/',
					},
				],
			},
			{
				icon: TemplatesIcon,
				text: 'Inputs',
				url: '/',
			},
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
