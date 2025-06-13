<script>
	import AlertCircleSmallIcon from '$lib/assets/icons/s/AlertCircleSmallIcon.svelte'
	import ErrorAlert from '$lib/components/containers/alerts/ErrorAlert.svelte'
	import ExportDataButton from '$lib/components/inputs/buttons/ExportDataButton.svelte'
	import { Alert, HandshakeSmallIcon, Button } from '$lib/index.js'

	let checkMarkSvg = `<div
			class="icon-wrapper"
			style="pointer-events:none;"
		>
		<svg
			fill="none"
			height="16"
			viewBox="0 0 16 16"
			width="16"
		><path
			d="M13 5L5.99984 12L3 9"
			stroke="var(--neutral-base)"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		</svg>
		</div>`
</script>

<h1>Alerts</h1>
<Alert
	icon={HandshakeSmallIcon}
	title="This is an Alert!"
	body="Please do something. I'm telling you necessary information. So much information, lorem ipsum and all that jazz. Like so miuch it wraps a line and maybe messes up the icons alignment and I realize that css rule was supposed to be there all along."
	button={ExportDataButton}
/>
<ErrorAlert 
	id="error-alert-1"
	icon={AlertCircleSmallIcon}
	title="This is an Alert!"
	body="Please do something. I'm telling you necessary information."
	button={ExportDataButton}
/>

<ErrorAlert 
	id="error-alert-2"
	icon={checkMarkSvg}
	title="This is an Alert!"
	body="Please do something else."
	tag={"This is a super cool tag!"}
	button={ExportDataButton}
/>