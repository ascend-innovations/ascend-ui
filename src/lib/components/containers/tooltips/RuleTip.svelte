<script>
	export let value = 'avg',
		position
</script>

<div
	class="rule-tip"
	style="top:{position - 23}px"
>
	<p>{value === 'avg' ? 'Avg.' : value}</p>
</div>
