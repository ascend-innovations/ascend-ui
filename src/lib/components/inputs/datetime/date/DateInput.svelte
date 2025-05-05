<script>
	export let date,
		id = '',
		name = '',
		required = false,
		styles = []
</script>

<input
	bind:value={date}
	class="date-input width-100"
	style={styles.join(';')}
	type="date"
	{id}
	{required}
	{name}
/>
