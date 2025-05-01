<script>
	export let tooltipInfo = {}
</script>

<div
	id={tooltipInfo.tooltipId}
	class="tooltip"
	style="top:{tooltipInfo.y}px;left:{tooltipInfo.x}px;"
>
	<div class="tooltip-text">
		<p class="tooltip-title"><b>{tooltipInfo.title}</b></p>
		{#if tooltipInfo.valueOneLabel}
			<p class="tooltip-values"><span>{tooltipInfo.valueOneLabel}:</span> <b>{tooltipInfo.valueOne}</b></p>
		{/if}
		{#if tooltipInfo.valueTwoLabel}
			<p class="values"><span>{tooltipInfo.valueTwoLabel}:</span> <b>{tooltipInfo.currency ? '$' : ''}{tooltipInfo.valueTwo.toLocaleString()}</b></p>
		{/if}
	</div>
</div>
