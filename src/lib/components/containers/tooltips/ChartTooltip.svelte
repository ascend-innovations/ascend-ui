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
			<p class="values"><span>{tooltipInfo.valueOneLabel}:</span> <b>{tooltipInfo.valueOne}</b></p>
		{/if}
		{#if tooltipInfo.valueTwoLabel}
			<p class="values">
				<span>{tooltipInfo.valueTwoLabel}:</span>
				<b>{tooltipInfo.currency ? '$' : ''}{tooltipInfo.valueTwo.toLocaleString()}</b>
			</p>
		{/if}
	</div>
</div>

<style>
	.tooltip {
		position: absolute;
		top: 0;
		left: 0;
		min-height: 70px;
		min-width: 120px;
		max-width: 230px;
		background-color: var(--neutral-base);
		border-radius: 12px;
		opacity: 0;
		pointer-events: none;
		transition: opacity ease-out 300ms;
	}

	.tooltip-text {
		font-size: 11px;
		height: 100%;
		width: 100%;
		padding: var(--spacing03) var(--spacing06);
		color: white;
		text-align: center;
		line-height: 150%;

		& .tooltip-title {
			font-size: 13px;
			margin-bottom: var(--spacing01);
		}
	}

	.values {
		font-size: 11px;
		/* overflow: hidden; */

		& span {
			color: var(--neutral-300);
		}
	}
</style>
