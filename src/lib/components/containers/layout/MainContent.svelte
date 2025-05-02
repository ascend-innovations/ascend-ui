<script>
	export let styles = []
</script>

<div
	class="main-content"
	style={styles.join(';')}
>
	<slot />
</div>
