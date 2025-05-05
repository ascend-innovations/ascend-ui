<script>
	import { ArrayCell, BooleanCell, ButtonCell, CheckboxCell, DateCell, FullYearDateCell, DateTimeCell, DefaultCell, EditableCell, LogoLinkCell, RadioCell, TagArrayCell, TagCell, LinkCell } from '$lib/index'

	export let column, row
</script>

<div
	class="table-cell"
	style={`${column?.styles?.join(';')}`}
>
	{#if column?.type === 'array'}
		<ArrayCell
			bind:column
			bind:row
			callback={column.callback}
		/>
	{:else if column?.type === 'boolean'}
		<BooleanCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'button'}
		<ButtonCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'checkbox' || column?.type === 'checkall'}
		<CheckboxCell
			bind:selected={row.selected}
			callback={column.callback}
		/>
	{:else if column?.type === 'checklist'}
		<CheckboxCell
			bind:selected={row[column.key]}
			callback={column.callback}
		/>
	{:else if column?.type === 'date'}
		<DateCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'datefullyear'}
		<FullYearDateCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'datetime'}
		<DateTimeCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'radiolist'}
		<RadioCell
			bind:group={row.group}
			callback={column.callback}
			value={column.key}
		/>
	{:else if column?.type === 'tagarray'}
		<TagArrayCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'tag'}
		<TagCell
			bind:column
			bind:row
		/>
	{:else if column?.editable}
		<EditableCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'logolink'}
		<LogoLinkCell
			bind:column
			bind:row
		/>
	{:else if column?.type === 'link'}
		<LinkCell
			bind:column
			bind:row
		/>
	{:else}
		<DefaultCell
			bind:column
			bind:row
		/>
	{/if}
</div>
