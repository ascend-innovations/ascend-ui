<script>
	import AlertCircleSmallIcon from '$lib/assets/icons/s/AlertCircleSmallIcon.svelte'
	import ErrorAlert from '$lib/components/containers/alerts/ErrorAlert.svelte'
	import ExportDataButton from '$lib/components/inputs/buttons/ExportDataButton.svelte'
	import { Page, Alert, PageBody, HandshakeSmallIcon, Button } from '$lib/index.js'

	let colors = false,
		inactiveStyles = ['width: 100%'],
		activeStyles = ['width: 100%', 'border-color: var(--primary-base)', 'background-color: var(--primary-100)']
	function changeColor() {
		colors = !colors
	}
</script>

<Page>
	<PageBody size="full">
		<h1>Alerts</h1>
		<Alert
			icon={colors ? AlertCircleSmallIcon : HandshakeSmallIcon}
			title="This is an Alert!"
			body="Please do something. I'm telling you necessary information."
			button={ExportDataButton}
			styles={colors ? activeStyles : inactiveStyles}
		/>
		<ErrorAlert 
			icon={AlertCircleSmallIcon}
			title="This is an Alert!"
			body="Please do something. I'm telling you necessary information."
			button={ExportDataButton}
		/>
		<Button
			text="toggle"
			callback={changeColor}
		/>
	</PageBody>
</Page>
