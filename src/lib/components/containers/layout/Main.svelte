<script>
	export let styles = []
</script>

<main style={styles.join(';')}>
	<slot />
</main>

<style>
	main {
		flex-grow: 1;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
