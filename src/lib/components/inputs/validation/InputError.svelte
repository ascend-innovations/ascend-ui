<script>
	import { AlertCircleSmallIcon } from '$lib/index.js'

	export let text
</script>

<div class="error">
	<div class="error-icon">
		<AlertCircleSmallIcon />
	</div>
	<div class="error-text">
		{text}
	</div>
</div>

<style>
	.error {
		display: flex;
		gap: var(--spacing05);
		width: 100%;
		border-radius: var(--spacing04);
	}
</style>
