<script>
	import { AscendLoginBackground, LoginCard } from '$lib/index.js'

	export let dialogCallback = null,
		loginHeader,
		ascendLogo = false
</script>

<div
	class="login-page"
	style={`background-image: url(${AscendLoginBackground})`}
>
	<LoginCard
		{dialogCallback}
		{loginHeader}
		{ascendLogo}
	>
		<slot />
	</LoginCard>
</div>
