<script>
	import { Tag, TooltipElement } from '$lib/index.js'

	export let status = '',
		map = null,
		time = ''

	$: statusKey = status ? status.replace(' ', '').toLowerCase() : 'default'

	const statusColorMap = map ? map : {
		approved: 'success',
		complete: 'success',
		default: 'neutral',
		draft: 'neutral',
		failed: 'error',
		inprogress: 'warning',
		pending: 'neutral',
		scheduled: 'neutral',
		sent: 'success',
		subscribed: 'success',
	}

	$: statusType = statusColorMap[statusKey]

	function getStatus(status, time) {
		if ((status === 'Sent' || status === 'In Progress') && time) return `${status} ${time}`
		else if (status === 'Scheduled' && time) return `${status} for ${time}`
		else return status
	}

	function getTooltip(status) {
		if (statusColorMap.tooltips) return statusColorMap.tooltips[status]
		else return ''
	} 

	$: displayStatus = getStatus(status, time)

	$: tooltipText = getTooltip(statusKey)
</script>

{#if statusColorMap?.tooltips}
	<TooltipElement>
		<div slot="element">
			<Tag
				type={`${statusType}-subtle`}
				bind:content={displayStatus}
			/>
		</div>
		<div slot="content">
			{tooltipText}
		</div>
	</TooltipElement>
{:else}
	<Tag
		type={`${statusType}-subtle`}
		bind:content={displayStatus}
	/>
{/if}
