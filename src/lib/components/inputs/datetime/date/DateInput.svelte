<script>
	export let date,
		id = '',
		name = '',
		required = false,
		styles = [],
		disabled = false,
		readonly = false
</script>

<input
	bind:value={date}
	class="date-input"
	style={styles.join(';')}
	type="date"
	{id}
	{required}
	{name}
	{readonly}
	{disabled}
/>

<style>
	.date-input {
		width: 100%;
	}
</style>
