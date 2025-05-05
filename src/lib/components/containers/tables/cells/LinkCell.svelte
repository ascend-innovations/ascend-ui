<script>
	export let column, row
</script>

<div style={column?.styles?.join(';')}>
	<a href={row[column.linkKey]}>{row[column.key] || ' '}</a>
</div>
