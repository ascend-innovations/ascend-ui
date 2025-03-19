<script>
	import { AscendLoginBackground, LoginCard } from '$lib/index.js'

	export let dialogCallback = null, loginHeader, ascendLogo = false
</script>

<div
	class="login-page"
	style={`background-image: url(${AscendLoginBackground})`}
>
	<LoginCard {dialogCallback} {loginHeader} {ascendLogo}>
		<slot />
	</LoginCard>
</div>

<style>
	.login-page {
		align-items: center;
		background-position: center;
		background-size: cover;
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
	}
	@media screen and (min-width: 768px) {
		.login-page {
			padding: unset;
		}
	}
</style>
