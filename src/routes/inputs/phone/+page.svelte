<script>
	import { PhoneNumberInput } from '$lib/index.js'

	let phoneNumber = ''
</script>

<PhoneNumberInput
	id="phone-number"
	label="Phone Number"
	placeholder="Enter your phone number"
	required={true}
	{phoneNumber}
/>
