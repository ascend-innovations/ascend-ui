<script>
	import AlertCircleSmallIcon from '$lib/assets/icons/s/AlertCircleSmallIcon.svelte'
	import ErrorAlert from '$lib/components/containers/alerts/ErrorAlert.svelte'
	import ExportDataButton from '$lib/components/inputs/buttons/ExportDataButton.svelte'
	import { Page, Alert, PageBody, HandshakeSmallIcon, Button } from '$lib/index.js'

</script>

<Page>
	<PageBody size="full">
		<h1>Alerts</h1>
		<Alert
			icon={HandshakeSmallIcon}
			title="This is an Alert!"
			body="Please do something. I'm telling you necessary information. So much information, lorem ipsum and all that jazz. Like so miuch it wraps a line and maybe messes up the icons alignment and I realize that css rule was supposed to be there all along."
			button={ExportDataButton}
		/>
		<ErrorAlert 
			icon={AlertCircleSmallIcon}
			title="This is an Alert!"
			body="Please do something. I'm telling you necessary information."
			button={ExportDataButton}
		/>
	</PageBody>
</Page>
