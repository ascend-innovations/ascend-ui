<script>
	import { Button } from '$lib/index.js'
	import { page } from '$app/stores'

	export let sublink

	$: currentPageLink = sublink.url === '/' ? $page.url.pathname === sublink.url : $page.url.pathname.includes(sublink.url)
</script>

<div class="subnav-button-wrapper">
	<div class={`subnav-current-page-indicator ${currentPageLink ? 'subnav-current-page-link' : ''}`}></div>
	<div class="subnav-button">
		<Button
			classes={['padding-left', 'btn-full', 'btn-left', 'btn-l', 'btn-full', 'btn-white']}
			text={sublink.text}
			url={sublink?.url ?? ''}
		/>
	</div>
</div>
