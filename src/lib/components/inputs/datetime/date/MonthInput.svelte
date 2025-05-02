<script>
	export let month,
		id = '',
		required = false,
		styles = []
</script>

<input
	bind:value={month}
	class="month-input"
	style={styles.join(';')}
	type="month"
	{id}
	{required}
/>
