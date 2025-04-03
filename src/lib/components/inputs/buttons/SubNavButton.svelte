<script>
	import { Button } from '$lib/index.js'
	import { page } from '$app/stores'

	export let sublink

	$: currentPageLink = $page.url.pathname === sublink?.url
</script>

<div class="subnav-button-wrapper">
	<div class={`current-page-indicator ${currentPageLink ? 'current-page-link' : ''}`}></div>
	<div class="nav-button body-xs">
		<Button
			classes={['padding-left', 'btn-full', 'btn-left', 'btn-l', 'btn-full', 'btn-white', 'btn-nav-hover']}
			text={sublink.text}
			url={sublink?.url ?? ''}
			styles={['padding-top: var(--spacing03)', 'padding-bottom: var(--spacing03)', 'text-decoration: none', `${currentPageLink ? 'font-weight:bold' : ''}`]}
		/>
	</div>
</div>

<style>
	.subnav-button-wrapper {
		display: flex;
		width: 100%;
	}
	.nav-button {
		width: 100%;
	}
	.current-page-indicator {
		width: var(--spacing02);
		border-radius: var(--border-radius-s);
	}
	.current-page-link {
		background-color: var(--primary-base);
	}
</style>
