<script>
	export let size,
		styles = []
</script>

<div
	class="icon-wrapper"
	style={`${styles.join('; ')}`}
>
	<svg
		fill="none"
		height={size}
		viewBox={`0 0 ${size} ${size}`}
		width={size}
	>
		<slot />
	</svg>
</div>

<style>
	.icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
