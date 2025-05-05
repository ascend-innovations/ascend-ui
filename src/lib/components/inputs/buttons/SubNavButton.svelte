<script>
	import { Button } from '$lib/index.js'
	import { page } from '$app/stores'

	export let callback, preload, sublink

	$: currentPageLink = $page.url.pathname === sublink?.url
</script>

<div class="subnav-button">
	<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`}></div>
	<div class="width-100">
		<Button
			classes={['padding-left', 'btn-full', 'btn-left', 'btn-l', 'btn-white', 'btn-nav-hover']}
			styles={['padding-top: var(--spacing02)', 'padding-bottom: var(--spacing02)', 'text-decoration: none', `${currentPageLink ? 'font-weight:bold' : ''}`]}
			text={sublink.text}
			url={sublink?.url ?? ''}
			{callback}
			{preload}
		/>
	</div>
</div>
