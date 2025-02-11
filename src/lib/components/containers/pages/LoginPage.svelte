<script>
	import { AscendLoginBackground, LoginCard } from '$lib/index.js'

	export let dialogCallback = null
</script>

<div
	class="login-page"
	style={`background-image: url(${AscendLoginBackground})`}
>
	<LoginCard {dialogCallback}>
		<slot />
	</LoginCard>
</div>
