<script>
	export let value = 0,
		min = 0,
		max = 100,
		styles = [],
		type = ''

	$: percentageComplete = ((value - min) / (max - min)) * 100
</script>

<div
	class="progress-bar"
	style={styles.join(';')}
>
	<div
		class={`progress-bar-fill ${type}`}
		style={`width: ${percentageComplete}%`}
	/>
</div>
