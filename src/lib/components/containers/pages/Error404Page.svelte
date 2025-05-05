<script>
	import { ContactUsButton, Error404Graphic } from '$lib/index.js'

	export let emailAddress = 'mailto:contact@ascend-innovations.com',
		emailString = 'contact@ascend-innovations.com',
		errorGraphic = Error404Graphic,
		redirectButton
</script>

<svelte:head>
	<title>404 Error</title>
</svelte:head>
<div class="error-404-page">
	<div class="error-404-page__banner-wrapper">
		<svelte:component this={errorGraphic} />
	</div>
	<div class="error-404-page__content">
		<h1 class="primary-headline-l-xxl">Page Not Found</h1>
		<div class="error-404-page__text">
			<p>
				The page you are trying to visit doesn't exist or was removed. If you are unable to find what you're looking for, please contact us at <a class="error-page-contact" href={emailAddress}>{emailString}</a>
			</p>
		</div>
		{#if redirectButton}
			<div class="error-404-page__buttons">
				<svelte:component this={redirectButton} />
				<ContactUsButton
					url={emailAddress}
					classes={['btn-full', 'btn-m', 'btn-outline', 'btn-rect']}
				/>
			</div>
		{/if}
	</div>
</div>
