<script>
	import { LinkButton, Button, Error401Graphic } from '$lib/index.js'

	export let errorGraphic = Error401Graphic
	export let callback
</script>

<svelte:head>
	<title>401 Error</title>
</svelte:head>
<div class="error-401-page">
	<div class="error-401-page__banner-wrapper">
		<svelte:component this={errorGraphic} />
	</div>
	<div class="error-401-page__content">
		<h1 class="primary-headline-l-xxl">Unauthorized</h1>
		<div class="error-401-page__text">
			<p>You are not authorized to access the page you are trying to visit. Please contact your administrator to gain access to this page.</p>
		</div>
		<div class="error-401-page__buttons">
			<div class="btn-content-wrapper">
				<Button
					classes={['btn-fit', 'btn-l', 'btn-square', 'btn-primary']}
					text="Logout"
					{callback}
				/>
			</div>
		</div>
		<div class="error-401-page__buttons">
			<div class="btn-content-wrapper">
				<LinkButton
					text="Return to App Portal"
					url="https://portal.ascend-innovations.com"
					classes={['btn-fit', 'btn-l', 'btn-square', 'btn-primary']}
				/>
			</div>
		</div>
	</div>
</div>
