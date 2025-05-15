<script>
	import { Page, PageBody, DefaultTooltipElement, TooltipElement, ClockRefreshIcon, NextButton, MetricCard, Card } from '$lib/index.js'
</script>

<Page>
	<PageBody size="full">
		<h1>Tooltips</h1>

		<div class="tooltips-content">
			<div>
				<DefaultTooltipElement>Tooltip text</DefaultTooltipElement>
				<div>
					<p>Small Tooltip</p>
				</div>
			</div>
			<div>
				<DefaultTooltipElement>Lots of tooltip text. So much that it may wrap to two or more lines. Ideally it will be three.</DefaultTooltipElement>
				<div>
					<p>Large Tooltip</p>
				</div>
			</div>
			<div>
				<DefaultTooltipElement>Lots of tooltip text. So much that it may wrap to two or more lines. Ideally it will be three. This amount overflows so that we go way over the alloted 3 lines. It works but we should avoid this.</DefaultTooltipElement>
				<div>
					<p>Overflowed Tooltip</p>
				</div>
			</div>
			<div>
				<TooltipElement>
					<div slot="element">
						<p style="text-decoration:underline;text-decoration-color:var(--neutral-100);cursor:pointer">Simple Text</p>
					</div>
					<div slot="content">This text requires some explanation...</div>
				</TooltipElement>
			</div>
			<div>
				<TooltipElement>
					<div slot="element">
						<ClockRefreshIcon />
					</div>
					<div slot="content">This shows another icon used instead of the default</div>
				</TooltipElement>
			</div>
			<div>
				<TooltipElement>
					<div slot="element">
						<NextButton
							text="Next"
							classes={['btn-outline', 'btn-m']}
						/>
					</div>
					<div slot="content">This is for a button</div>
				</TooltipElement>
			</div>
			<div>
				<TooltipElement>
					<div slot="element">
						<MetricCard
							styles={['align-items:center']}
							title="Some Metric"
							value="100"
						/>
					</div>
					<div slot="content">
						<p><span style="color:var(--neutral-300)">Value:</span> 100</p>
					</div>
				</TooltipElement>
			</div>
			<div>
				<Card
					styles={['border: 1px solid var(--neutral-100)', 'padding: var(--spacing09)']}
					title="Card"
					titleTooltip={{ content: 'This is the tooltip for a card or chart' }}
				>
					Some content goes here
				</Card>
			</div>
		</div>
	</PageBody>
</Page>

<style>
	.tooltips-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing12);
		justify-content: center;
	}
</style>
