<script>
	export let id = '',
		required = false,
		styles = [],
		time,
		disabled=false,
		readonly=false
</script>

<input
	bind:value={time}
	class="time-input"
	style={styles.join(';')}
	type="time"
	{id}
	{required}
	{readonly}
	{disabled}
/>

<style>
	.time-input {
		width: 100%;
	}
</style>
