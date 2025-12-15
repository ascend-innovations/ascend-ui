<script>
	import { NumberRangeInput, Page, PageBody } from '$lib/index.js'

	let validRange, validationText, start, end

	$: what = validRange
</script>

<Page>
	<PageBody size="full">
		<div>{what}</div>
		<NumberRangeInput
			id="range"
			label="Number Range Input"
			bind:start
			bind:end
			bind:validValues={validRange}
			{validationText}
		/>
	</PageBody>
</Page>
