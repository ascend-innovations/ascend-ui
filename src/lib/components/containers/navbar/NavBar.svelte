<script>
	import { NavButton, ChevronDoubleLeftSmallIcon, ChevronSingleDownSmallIcon } from '$lib/index.js'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { slide } from 'svelte/transition'

	export let navClickCallback,
		navBarContents,
		preload,
		url = '/',
		closedHeaderComponent = undefined,
		openHeaderComponent = undefined,
		allLinks = [],
		keepOpen = true,
		navbarOpen = true,
		navbar,
		navbarHeaderOpen,
		navbarHeaderClosed,
		toggleButton

	function navbarFocus() {
		if (!keepOpen) {
			toggleButton.style.display = 'block'
			navbarHeaderClosed.style.display = 'none'
			navbarHeaderOpen.style.display = 'flex'
			navbar.classList.add('nav--open')
			navbar.classList.remove('nav--closed')
			allLinks.forEach((link) => link.classList.remove('transparent-text'))
		}
	}
	function navbarBlur() {
		console.log('blur', keepOpen)
		if (!keepOpen) {
			navbarOpen = false
			toggleButton.style.display = 'none'
			navbarHeaderClosed.style.display = 'flex'
			navbarHeaderOpen.style.display = 'none'
			navbar.classList.remove('nav--open')
			navbar.classList.add('nav--closed')
			allLinks.forEach((link) => link.classList.add('transparent-text'))
		}
	}

	function toggleKeepOpen() {
		toggleButton.style.transform = keepOpen ? 'rotate(180deg)' : 'rotate(0deg)'
		keepOpen = !keepOpen
		if (keepOpen) {
			navbar.classList.add('nav--open')
			navbar.classList.remove('nav--closed')
		} else {
			navbar.classList.remove('nav--open')
			navbar.classList.add('nav--closed')
		}
	}
 
	onMount(() => {
		if (browser) {
			navbar = document.querySelector('.navbar')
			navbarHeaderOpen = document.querySelector('.navbar__header--open')
			navbarHeaderClosed = document.querySelector('.navbar__header--closed')
			toggleButton = document.querySelector('.navbar__header .navbar__toggle-button')

			toggleButton.addEventListener('click', toggleKeepOpen)

			navbar.addEventListener('mouseenter', navbarFocus)
			navbar.addEventListener('focus', navbarFocus)
			navbar.addEventListener('mouseleave', navbarBlur)
			navbar.addEventListener('blur', navbarBlur)

			let pageList = document.querySelector('.navbar__page-list')
			for (let page of navBarContents?.primaryPageList || []) {
				let pageNode = document.createElement('div')
				pageNode.classList = 'navbar-button width-100'
				pageNode.innerHTML = `
					<div class="navbar-button__indicator-wrapper">
						<div class="current-page-indicator ${window.location.href.includes(page.url) ? 'current-page-link' : ''}"></div>
						<div class="width-100">
							<a href="${page.url}" class="nav-link-text link-button btn-left btn-full btn-l btn-white btn-nav-hover width-100" style="display:block;text-decoration: none;">
								${page.text}
							</a>

							${page.sublinks ? `
								<div class="navbar-button__subnav-wrapper width-100 ${page.startOpen ? 'subnav--open' : 'subnav--closed'}">
									${page.sublinks.map((sublink) => `
										<div class=" current-page-indicator ${window.location.href.includes(page.url) ? 'current-page-link' : ''}"></div>
										<div 
											class="subnav-button padding-left btn-full btn-left btn-l btn-white btn-nav-hover"
											style="padding-top:var(--spacing02);padding-bottom:var(--spacing02);"
										>
											<a class="nav-link-text" style="display:block;text-decoration:none;" href="${sublink.url}">${sublink.text}</a>
										</div>
									`).join('')}
								</div>
							` : ''}
						</div>
					</div>
				`
				pageList.appendChild(pageNode)
			}

			let secondaryPageList = document.querySelector('.navbar__secondary-page-list')
			for (let secondaryPage of navBarContents?.secondaryPageList || []) {
				let pageNode = document.createElement('div')
				pageNode.classList = 'navbar-button width-100'
				pageNode.innerHTML = `
					<div class="navbar-button__indicator-wrapper">
						<div class="current-page-indicator ${window.location.href.includes(secondaryPage.url) ? 'current-page-link' : ''}"></div>
						<div class="width-100">
							<a href="${secondaryPage.url}" class="nav-link-text link-button btn-left btn-full btn-l btn-white btn-nav-hover width-100" style="display:block;text-decoration: none;">
								${secondaryPage.text}
							</a>

							${secondaryPage.sublinks ? `
								<div class="navbar-button__subnav-wrapper width-100 ${secondaryPage.startOpen ? 'subnav--open' : 'subnav--closed'}">
									${secondaryPage.sublinks.map((sublink) => `
										<div class=" current-page-indicator ${window.location.href.includes(secondaryPage.url) ? 'current-page-link' : ''}"></div>
										<div 
											class="subnav-button padding-left btn-full btn-left btn-l btn-white btn-nav-hover"
											style="padding-top:var(--spacing02);padding-bottom:var(--spacing02);"
										>
											<a class="nav-link-text" style="display:block;text-decoration:none;" href="${sublink.url}">${sublink.text}</a>
										</div>
									`).join('')}
								</div>
							` : ''}
						</div>
					</div>
				`
				secondaryPageList.appendChild(pageNode)
			}

			allLinks = document.querySelectorAll('.navbar-button') // grab links after they're added to the DOM
		}
	})
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
					<svelte:component this={closedHeaderComponent} />
				</div>
			</div>
			<div class="navbar__page-list"></div>
			<div class="navbar__secondary-page-list"></div>
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
