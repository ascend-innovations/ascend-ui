<script>
	import { AscendLoginBackground, RegistrationCard } from '$lib/index.js'
</script>

<div
	class="registration-page"
	style={`background-image: url(${AscendLoginBackground})`}
>
	<RegistrationCard>
		<slot />
	</RegistrationCard>
</div>
