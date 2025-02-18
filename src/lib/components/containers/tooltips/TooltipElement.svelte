<div class="tooltip-frame">
	<slot name="element" />
	<div class="default-tooltip">
		<slot name="content" />
	</div>
</div>

<style>
	.tooltip-frame {
		position: relative;
		width: fit-content;
	}
	.default-tooltip {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		visibility: hidden;
		background-color: var(--neutral-base);
		padding: var(--spacing03) var(--spacing06);
		width: max-content;
		max-width: 240px;
		color: white;
		font-size: var(--body-xxs-font-size);
		font-weight: 700;
		text-align: center;
		border-radius: 12px;
		line-height: 150%;
	}
	.tooltip-frame:hover .default-tooltip {
		visibility: visible;
		bottom: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%);
	}
</style>
