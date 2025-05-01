<script>
	import CheckboxInput from '$lib/components/inputs/checkboxes/CheckboxInput.svelte'
	import CheckOption from '$lib/components/inputs/checkboxes/CheckOption.svelte'
	import { CheckDone01SmallIcon, CheckList, MainContent } from '$lib/index.js'

	const list = [
		{
			description: 'test desc',
			label: 'test label',
			name: 'test-name',
			selected: false,
			value: 'test-a',
		},
		{
			description: 'test desc',
			label: 'test label',
			name: 'test-name',
			selected: false,
			value: 'test-b',
		},
	]

	function callback(checked, value) {
		console.log(checked, value)
	}
</script>

<MainContent>
	<h1>Checkboxes</h1>
	<CheckList
		{list}
		{callback}
	/>
	<CheckboxInput
		value="no"
		{callback}
	/>
	<CheckOption
		name="yes"
		{callback}
	/>
</MainContent>
