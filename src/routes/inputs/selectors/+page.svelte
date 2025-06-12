<script>
	import { MultiSelector } from '$lib/index.js'
	import { onMount } from 'svelte'

	const optionList = [
		{ value: 'All', selected: false },
		{ value: 'This', selected: false },
		{ value: 'That', selected: false },
		{ value: 'The Other', selected: false },
		{ value: 'Blah', selected: false },
		{ value: 'What?', selected: false },
		{ value: 'Last', selected: false },
	]

	const newOptionsList = optionList.map((option) => option.value)
</script>

<h1>Selectors</h1>
<div>
	<MultiSelector
		id="zip-code"
		label="Zip Code"
		searchable
		optionList={newOptionsList}
	/>
</div>
