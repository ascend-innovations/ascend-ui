<script>
	export let id = '',
		required = false,
		styles = [],
		time
</script>

<input
	bind:value={time}
	class="time-input"
	style={styles.join(';')}
	type="time"
	{id}
	{required}
/>

<style>
	.time-input {
		width: 100%;
	}
</style>
