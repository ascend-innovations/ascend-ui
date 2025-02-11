<script>
	export let size = 'thin',
		styles = []
</script>

<div
	class={`page-body ${size}`}
	style={styles.join(';')}
>
	<slot />
</div>
