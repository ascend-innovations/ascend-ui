<script>
    export let column, row
</script>

<div
	class="logo-link-cell"
	style={column?.styles?.join(';')}
>
    <a href={row[column.linkKey]}>{row[column.key] || ' '}</a>
</div>