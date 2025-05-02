<script>
	export let styles = []
</script>

<div
	class="page"
	style={styles.join(';')}
>
	<slot />
</div>
