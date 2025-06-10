<script>
	import { RadioDetailedList, RadioList, RadioOption } from '$lib/index.js'

	const sampleRadioList = [
		{
			label: 'Newest On Top',
			value: 'newest',
		},
		{
			label: 'Oldest On Top',
			value: 'oldest',
		},
	]

	const sampleDetailedRadioList = [
		{
			description: 'Newest description',
			label: 'Detailed Newest On Top',
			name: 'Newest Name',
			value: 'detailed-newest',
		},
		{
			description: 'Oldest description',
			label: 'Detailed Oldest On Top',
			name: 'Oldest Name',
			value: 'detailed-oldest',
		},
	]

	const sampleItem1 = {
		label: 'sample-item-1-label',
		value: 'sample 1',
	}

	const sampleItem2 = {
		label: 'sample-item-2-label',
		value: 'sample 2',
	}

	const sampleItem3 = {
		label: 'sample-item-3-label',
		value: 'sample 3',
	}

	let radioListGroup = ''

	let radioDetailedListGroup = ''

	let radioOptionGroup = ''
</script>

<h1>RadioList</h1>
<div>RadioList Group: {radioListGroup}</div>
<RadioList
	bind:group={radioListGroup}
	list={sampleRadioList}
/>
<hr />
<h1>RadioDetailedList</h1>
<div>RadioDetailedList Group: {radioDetailedListGroup}</div>
<RadioDetailedList
	bind:group={radioDetailedListGroup}
	list={sampleDetailedRadioList}
/>
<hr />
<h1>RadioOption</h1>
<div>RadioOption Group: {radioOptionGroup}</div>
<RadioOption
	bind:group={radioOptionGroup}
	label={sampleItem1.label}
	value={sampleItem1.value}
/>
<RadioOption
	bind:group={radioOptionGroup}
	label={sampleItem2.label}
	value={sampleItem2.value}
/>
<RadioOption
	bind:group={radioOptionGroup}
	label={sampleItem3.label}
	value={sampleItem3.value}
/>
