<script>
	import { ErrorTag, RoleTag, StatusTag, Tag } from '$lib/index.js'

	export let column, row
</script>

<div class="table-cell-tag-array">
	{#each row[column.key] as tag}
		<Tag
			content={tag}
			type="neutral-subtle"
		/>
	{/each}
</div>
