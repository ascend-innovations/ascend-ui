<script>
	import { ContactUsButton, PageFooter, PrivacyPolicyButton, TermsAndConditionsButton } from '$lib/index.js'

	export let contactUsURL, privacyPolicyURL, termsAndConditionsURL
</script>

<PageFooter>
	<div class="footer-bar">
		<div class="company-signature">
			Powered by <strong
				><a
					href="https://ascend-innovations.com/"
					target="_blank">Ascend Innovations</a
				></strong
			>
		</div>
		<div class="link-buttons">
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

<style>
	.footer-bar {
		align-items: center;
		background-color: var(--background-base);
		display: flex;
		height: var(--spacing13);
		justify-content: space-between;
		margin-top: auto;
		padding: 0 var(--spacing09);
		width: 100%;
	}
	.link-buttons {
		display: flex;
		gap: var(--spacing06);
	}
</style>
