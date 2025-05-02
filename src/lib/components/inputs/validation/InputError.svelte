<script>
	import { AlertCircleSmallIcon } from '$lib/index.js'

	export let text
</script>

<div class="validation-error width-100">
	<div class="error-icon">
		<AlertCircleSmallIcon />
	</div>
	<div class="error-text">
		{text}
	</div>
</div>
