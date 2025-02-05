<script>
	import { EditButton, Page, PageBody, RadioInput, StatusTag, Table } from '$lib/index'

	let list = [
		{
			array: ['1', '3', '5'],
			boolean: true,
			button: EditButton,
			checkbox: false,
			date: '1/10/2022',
			default: 'B Default Text',
			editable: 'B Editable Text',
			radio: true,
			status: 'pending',
			logoKey: '/src/lib/assets/images/default-logo.png',
			textKey: 'Text One',
			linkKey: '1234567890',
		},
		{
			array: ['2', '4', '6'],
			boolean: false,
			button: EditButton,
			checkbox: true,
			date: new Date('10/6/2023'),
			default: 'A Default Text',
			editable: 'A Editable Text',
			radio: false,
			status: 'Approved',
			tagMap: { approved: 'warning', tooltips: { approved: 'this was approved' }},
			logoKey: '/src/lib/assets/images/default-logo.png',
			textKey: 'Text Two',
			linkKey: '',
		},
		// {
		// 	array: ['1', '2', '3'],
		// 	boolean: true,
		// 	button: EditButton,
		// 	checkbox: true,
		// 	date: new Date('12/12/2024'),
		// 	default: 'C Default Text',
		// 	editable: 'C Editable Text',
		// 	radio: true,
		// 	status: 'pending',
		// },
	]

	const columns = [
		{
			title: 'Default',
			key: 'default',
			type: 'text',
			styles: ['flex: 2', 'max-width: 223px', 'white-space: nowrap', 'overflow: hidden', 'text-overflow: ellipsis', 'font-weight: bold'],
		},
		// {
		// 	title: 'Array',
		// 	key: 'array',
		// 	type: 'array',
		// 	styles: ['flex: 2', 'max-width: 223px', 'white-space: nowrap', 'overflow: hidden', 'text-overflow: ellipsis'],
		// },
		{
			title: 'Date',
			key: 'date',
			type: 'date',
			styles: ['flex: 1'],
		},
		{
			title: 'Tag',
			component: StatusTag,
			key: 'status',
			type: 'tag',
			styles: ['flex: 1'],
		},
		{
			title: 'Editable',
			key: 'editable',
			type: 'text',
			styles: ['flex: 1'],
		},
		{
			title: 'Button',
			component: EditButton,
			key: 'button',
			type: 'button',
			styles: ['flex: 1'],
		},
		{
			title: 'Radio',
			component: RadioInput,
			key: 'radio',
			type: 'radiolist',
			styles: ['flex: 1'],
		},
		{
			title: 'Logo Link',
			type: 'logolink',
			logoKey: 'logoKey',
			textKey: 'textKey',
			linkKey: 'linkKey',
			styles: ['flex: 3'],
		},
	]
</script>

<Page>
	<PageBody size="full">
		<Table
			{columns}
			bind:list
		/>
	</PageBody>
</Page>
