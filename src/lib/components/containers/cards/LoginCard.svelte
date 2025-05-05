<script>
	import { AscendLogoWithText } from '$lib/index.js'
	export let dialogCallback,
		loginHeader = 'Login',
		ascendLogo = false
</script>

<div class="login-card">
	{#if ascendLogo}
		<div class="login-card__ascend-icon width-100">
			<img
				src={AscendLogoWithText}
				alt="ascend-logo"
			/>
		</div>
	{/if}
	<div class="login-card__header width-100 text-align-center">{loginHeader}</div>
	<slot />
	{#if dialogCallback}
		<div class="width-100">
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p
				on:click={dialogCallback}
				on:keypress={dialogCallback}
				class="login-card__account-link"
			>
				Create Account or Change Profile Info
			</p>
		</div>
	{/if}
</div>
