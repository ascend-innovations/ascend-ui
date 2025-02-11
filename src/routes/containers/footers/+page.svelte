<script>
    import FooterBar from '$lib/components/containers/footers/FooterBar.svelte'
	import FooterNavigation from '$lib/components/containers/footers/FooterNavigation.svelte'
	import PageBody from '$lib/components/containers/pages/PageBody.svelte'
	import PageFooter from '$lib/components/containers/pages/PageFooter.svelte'
import { Page } from '$lib/index.js'
</script>

<Page>
    <h1>Footers</h1>

    <FooterBar 
        termsAndConditionsURL="/"
        privacyPolicyURL="/"
        contactUsURL="/" 
    />
</Page>