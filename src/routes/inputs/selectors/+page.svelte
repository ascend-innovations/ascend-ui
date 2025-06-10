<script>
	import Button from '$lib/components/inputs/buttons/Button.svelte'
	import convertToCurrency from '$lib/functions/formatting/convertToCurrency'
	import { MultiSelector } from '$lib/index.js'

	const optionList = [
		{ value: 'All', selected: false },
		{ value: 'This', selected: false },
		{ value: 'That', selected: false },
		{ value: 'The Other', selected: false },
		{ value: 'Blah', selected: false },
		{ value: 'What?', selected: false },
		{ value: 'Last', selected: false },
	]
</script>

<h1>Selectors</h1>
<div>
	<MultiSelector
		id="zip-code"
		label="Zip Code"
		searchable
		{optionList}
	/>
</div>
