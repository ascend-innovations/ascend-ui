<script>
	export let value = 0,
		min = 0,
		max = 100,
		styles = [],
		type = ''

	$: percentageComplete = ((value - min) / (max - min)) * 100
</script>

<div
	class="progress-bar"
	style={styles.join(';')}
>
	<div
		class={`progress-bar-fill ${type}`}
		style={`width: ${percentageComplete}%`}
	/>
</div>

<style>
	.progress-bar {
		background-color: var(--neutral-050);
		border-radius: var(--spacing04);
		height: var(--spacing02);
		overflow: hidden;
		width: 100%;
	}
	.progress-bar-fill {
		height: 100%;
	}
	.alert {
		background-color: var(--primary-base);
	}
	.error {
		background-color: var(--error-base);
	}
	.info {
		background-color: var(--info-base);
	}
	.success {
		background-color: var(--success-base);
	}
</style>
