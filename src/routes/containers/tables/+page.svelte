<script>
	import { EditButton, Page, PageBody, RadioInput, StatusTag, Table, PaginatedTable } from '$lib/index'
	import {onMount} from "svelte"
	const columns = [
		{
			title: 'Name',
			key: 'name',
			linkKey: 'link',
			type: 'link',
			styles: ['flex: 2', 'max-width: 223px', 'white-space: nowrap', 'overflow: hidden', 'text-overflow: ellipsis', 'font-weight: bold'],
		},
		{
			title: 'Email',
			key: 'email',
			type: 'text',
			styles: ['flex: 1'],
		},
		// {
		// 	title: 'Array',
		// 	key: 'array',
		// 	type: 'array',
		// 	styles: ['flex: 2', 'max-width: 223px', 'white-space: nowrap', 'overflow: hidden', 'text-overflow: ellipsis'],
		// },
		// {
		// 	title: 'Date',
		// 	key: 'date',
		// 	type: 'date',
		// 	styles: ['flex: 1'],
		// },
		{
			title: 'Tag',
			component: StatusTag,
			key: 'status',
			type: 'tag',
			tagMap: { approved: 'warning', pending: 'neutral', tooltips: { approved: 'Provider listing has been published to the external LocalHelpNow directory.' } },
			styles: ['flex: 1'],
		},
		{
			title: 'Date',
			type: 'datetime',
			key: 'date',
			styles: ['flex: 1'],
		},
		// {
		// 	title: 'Editable',
		// 	key: 'editable',
		// 	type: 'text',
		// 	styles: ['flex: 1'],
		// },
		// {
		// 	title: 'Button',
		// 	component: EditButton,
		// 	key: 'button',
		// 	type: 'button',
		// 	styles: ['flex: 1'],
		// },
		// {
		// 	title: 'Radio',
		// 	component: RadioInput,
		// 	key: 'radio',
		// 	type: 'radiolist',
		// 	styles: ['flex: 1'],
		// },
		// {
		// 	title: 'Logo Link',
		// 	type: 'logolink',
		// 	logoKey: 'logoKey',
		// 	key: 'key',
		// 	linkKey: 'linkKey',
		// 	styles: ['flex: 3'],
		// },
	]

	let list = generateRandomData();
	let list2 = [];

	function generateRandomData() {
		const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Wilson']
		const domains = ['example.com', 'randommail.com', 'testemail.com', 'fakeemail.com']
		const statuses = ['Approved', 'Pending']

		function getRandomItem(arr) {
			return arr[Math.floor(Math.random() * arr.length)]
		}

		const data = []

		for (let i = 0; i < 50; i++) {
			const name = getRandomItem(names)
			const email = `${name.split(' ').join('.').toLowerCase()}@${getRandomItem(domains)}`
			const status = getRandomItem(statuses)
			const date = generateRandomDate()

			data.push({
				name: name,
				email: email,
				link: 'https://google.com',
				status: status,
				date: date,
			})
		}

		return data
	}

	function generateRandomDate() {
		const startDate = new Date(2000, 0, 1) // Start from January 1, 2000
		const endDate = new Date() // Current date

		// Generate a random timestamp between start and end date
		const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())

		// Create a new Date object with the random timestamp
		const randomDate = new Date(randomTimestamp)

		// Extract the date components
		const month = String(randomDate.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
		const day = String(randomDate.getDate()).padStart(2, '0')
		const year = randomDate.getFullYear()

		// Return the formatted date
		return `${month}-${day}-${year}`
	}

	function wait(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function loadTest(){
		await wait(5000);

		return generateRandomData()

	}
	
	onMount(async () => {
		list2 = await loadTest();
	});
	

</script>

<Page>
	<PageBody size="full">
		<div style="display:flex; flex-direction:column; gap:30px;">
			<!-- <Table
				{columns}
				bind:list
			/> -->

			<PaginatedTable
				{columns}
				{list}
			/>
			<PaginatedTable
			{columns}
			list={list2}
			/>
		</div>
	</PageBody>
</Page>
