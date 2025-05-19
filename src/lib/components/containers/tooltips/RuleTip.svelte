<script>
	export let value, position
</script>

<div
	class="rule-tip"
	style="top:{position}px"
>
	<p>{value === 'avg' ? 'Avg.' : value}</p>
</div>
