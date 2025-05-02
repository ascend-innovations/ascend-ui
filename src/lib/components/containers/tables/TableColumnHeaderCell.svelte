<script>
	import { CheckboxInput, TableColumnHeaderButton } from '$lib/index.js'

	export let column, list, order, sortTable

	let allChecked = false

	function toggleCheckAll() {
		list = list.map((item) => {
			item.selected = allChecked
			return item
		})
	}
</script>

<div
	class="table-column-header-cell"
	style={`${column?.styles?.join(';')}`}
>
	{#if column.type === 'checkall'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="check-all">
			<CheckboxInput
				bind:checked={allChecked}
				callback={toggleCheckAll}
			/>
		</div>
	{:else}
		<TableColumnHeaderButton
			callback={() => sortTable(column.key, column.type)}
			text={column?.title || ''}
			{order}
		/>
	{/if}
</div>
