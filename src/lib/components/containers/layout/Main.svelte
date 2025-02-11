<script>
	export let styles = []
</script>

<main style={styles.join(';')}>
	<slot />
</main>
