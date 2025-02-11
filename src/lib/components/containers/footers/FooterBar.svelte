<script>
	import { ContactUsButton, PageFooter, PrivacyPolicyButton, TermsAndConditionsButton } from '$lib/index.js'

	export let contactUsURL, privacyPolicyURL, termsAndConditionsURL
</script>

<PageFooter>
	<div class="footer-bar">
		<div class="company-signature">
			Powered by <strong>Ascend Innovations</strong>
		</div>
		<div class="footer-link-buttons">
			{#if termsAndConditionsURL}
				<TermsAndConditionsButton url={termsAndConditionsURL} />
			{/if}
			{#if privacyPolicyURL}
				<PrivacyPolicyButton url={privacyPolicyURL} />
			{/if}
			{#if contactUsURL}
				<ContactUsButton url={contactUsURL} />
			{/if}
		</div>
	</div>
</PageFooter>
