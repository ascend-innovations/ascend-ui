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
		navigationText = {}

	function navbarFocus() {
		toggleButton.style.display = 'block'
		navbarHeaderClosed.style.display = 'none'
		navbarHeaderOpen.style.display = 'flex'
		navbar.classList.add('nav--open')
		navbar.classList.remove('nav--closed')
	}
	function navbarBlur() {
		navbarOpen = false
		toggleButton.style.display = 'none'
		navbarHeaderClosed.style.display = 'flex'
		navbarHeaderOpen.style.display = 'none'
		navbar.classList.remove('nav--open')
		navbar.classList.add('nav--closed')
	}

	onMount(() => {
		if (browser) {
			let keepOpen = true
			let navbarOpen = true
			let navbar = document.querySelector('.navbar')
			let navbarHeaderOpen = document.querySelector('.navbar__header--open')
			let navbarHeaderClosed = document.querySelector('.navbar__header--closed')
			let toggleButton = document.querySelector('.navbar__header .navbar__toggle-button')

			toggleButton.addEventListener('click', () => {
				toggleButton.style.transform = keepOpen ? 'rotate(180deg)' : 'rotate(0deg)'
				navbar.classList.toggle('nav--open')
				navbar.classList.toggle('nav--closed')
				allLinks.forEach((link) => link.classList.toggle('transparent-text'))
				keepOpen = !keepOpen
			})

			if (!keepOpen) {
				navbar.addEventListener('mouseenter', navbarFocus)
				navbar.addEventListener('focus', navbarFocus)
				navbar.addEventListener('mouseleave', navbarBlur)
				navbar.addEventListener('blur', navbarBlur)
			}

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
			
			// let index = 0
			// for (let link of document.querySelectorAll('.nav-link-text').values()) {
			// 	navigationText[index] = {}
			// 	navigationText[index][link.textContent.trim()] = []
			// 	navigationText[index][link.textContent.trim()].push(link.textContent.trim())
			// 	if (link.parentElement.querySelector('.subnav-button')) {
			// 		navigationText[index].sublinks = []
			// 		navigationText[index].sublinks = Array.from(link.parentElement.querySelectorAll('.subnav-button a')).map((a) => a.textContent.trim())
			// 	}

			// 	index++
			// }

			for (let secondaryPage of navBarContents?.secondaryPageList || []) {
				
			}

			let allLinks = document.querySelectorAll('.navbar-button') // grab links after they're added to the DOM
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
			<div class="navbar__page-list">
				<!-- {#if navBarContents?.primaryPageList?.length}
					{#each navBarContents.primaryPageList as pageData}
						<div class="width-100">
							<NavButton
								callback={navClickCallback}
								{pageData}
								{preload}
							/>
						</div>
					{/each}
				{/if} -->
				<!-- {#if navBarContents?.secondaryPageList?.length}
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
				{/if} -->
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
