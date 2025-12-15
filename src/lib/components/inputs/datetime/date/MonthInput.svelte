<script>
	export let month,
		id = '',
		required = false,
		styles = [],
		disabled=false,
		readonly=false
</script>

<input
	bind:value={month}
	class="month-input"
	style={styles.join(';')}
	type="month"
	{id}
	{required}
	{disabled}
	{readonly}
/>

<style>
	.month-input {
		width: 100%;
	}
</style>
