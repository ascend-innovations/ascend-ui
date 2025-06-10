<script>
	import './styles.css'
	import { AscendLogoIcon, HeaderBar, HomeIcon, NavBar, ProfileButton, TemplatesIcon, ToastArea } from '$lib/index.js'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'

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
				url: '/assets/icons',
			}
		],
	}

	onMount(() => {
		if (browser) {
			let keepOpen = true
			let navbar = document.querySelector('.navbar')
			let navbarHeaderOpen = document.querySelector('.navbar__header--open')
			let navbarHeaderClosed = document.querySelector('.navbar__header--closed')
			let toggleButton = document.querySelector('.navbar__header .navbar__toggle-button')

			toggleButton.addEventListener('click', () => {
				toggleButton.style.transform = keepOpen ? 'rotate(180deg)' : 'rotate(0deg)'
				navbar.classList.toggle('nav--open')
				navbar.classList.toggle('nav--closed')
				keepOpen = !keepOpen
			})

			if (!keepOpen) {
				navbar.addEventListener('mouseenter', () => {
					toggleButton.style.display = 'block'
					navbarHeaderClosed.style.display = 'none'
					navbarHeaderOpen.style.display = 'flex'
					navbar.classList.add('nav--open')
					navbar.classList.remove('nav--closed')
				})
				navbar.addEventListener('focus', () => {
					toggleButton.style.display = 'block'
					navbarHeaderClosed.style.display = 'none'
					navbarHeaderOpen.style.display = 'flex'
					navbar.classList.add('nav--open')
					navbar.classList.remove('nav--closed')
				})
				navbar.addEventListener('mouseleave', () => {
					toggleButton.style.display = 'none'
					navbarHeaderClosed.style.display = 'flex'
					navbarHeaderOpen.style.display = 'none'
					navbar.classList.remove('nav--open')
					navbar.classList.add('nav--closed')
				})
				navbar.addEventListener('blur', () => {
					toggleButton.style.display = 'none'
					navbarHeaderClosed.style.display = 'flex'
					navbarHeaderOpen.style.display = 'none'
					navbar.classList.remove('nav--open')
					navbar.classList.add('nav--closed')
				})
			}
		}
	})
</script>

<div class="shell">
	<NavBar
		keepOpen={true}
		openHeaderComponent={NavIcon}
		closedHeaderComponent={NavIcon}
		{navBarContents}
	/>
	<main class="main">
		<HeaderBar>
			<ProfileButton url="/" />
		</HeaderBar>
		<div class="page">
			<div class="page-body full">
				<slot />
			</div>
		</div>
	</main>
	<ToastArea />
</div>
