<script>
    import { LinkButton, Button, Error401Graphic } from '$lib/index.js'

	export let errorGraphic = Error401Graphic
	export let callback
</script>

<svelte:head>
	<title>401 Error</title>
</svelte:head>
<div class="error-401-page">
	<div class="error-401-banner-wrapper">
		<svelte:component this={errorGraphic} />
	</div>
	<div class="error-401-content">
		<h1 class="primary-headline-l-xxl">Unauthorized</h1>
		<div class="error-401-text-row">
			<p>
				You are not authorized to access the page you are trying to visit. Please contact your administrator to
				gain access to this page.
			</p>
		</div>
		<div class="error-401-button-row">
			<div class="btn-content-wrapper">
				<Button
                    classes={['btn-fit', 'btn-l', 'btn-square', 'btn-primary']}
                    text="Logout"
                    callback={callback}
                />
			</div>
		</div>
		<div class="error-401-button-row">
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

<style>
	.error-401-page {
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.error-401-banner-wrapper {
		width: var(--spacing32);
	}
	.error-401-content {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing10);
		justify-content: space-between;
		text-align: center;
		width: var(--spacing27);
	}
	.error-401-button-row {
		align-items: space-between;
		display: flex;
		flex-direction: column;
		gap: var(--spacing09);
		width: 100%;
	}
	a {
		color: var(--neutral-800);
		font-weight: bold;
	}
</style>