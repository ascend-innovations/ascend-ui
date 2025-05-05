<script>
	import { Page, PageBody, NumberInput, NumberRangeInput, ZipCodeInput, PhoneNumberInput, CharacterCounter } from '$lib/index.js'

	let validRange, validationText, start, end
</script>

<Page>
	<PageBody size="full">
		<NumberInput 
			id="number"
			label="Number"
		/>
		<NumberRangeInput
			id="range"
			label="Number Range Input"
			bind:start
			bind:end
			bind:validValues={validRange}
			{validationText}
		/>
		<ZipCodeInput 
			id='zip'
			label="Zip Code"
		/>
		<PhoneNumberInput 
			id="phone-number"
			label="Phone Number"
		/>
		<h2>Character Counter</h2>
		<CharacterCounter 
			text="this"
		/>
	</PageBody>
</Page>
