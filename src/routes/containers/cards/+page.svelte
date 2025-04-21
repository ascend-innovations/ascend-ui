<script>
	import { Card, NewNotificationIcon, Page, MetricCard } from '$lib/index.js'
</script>

<Page>
	<h1>Cards</h1>
	<Card
		classes={['card-s']}
		title="Example Card"
		icon={NewNotificationIcon}
	>
		<p>Description of an example card</p>
	</Card>

	<div class="metrics-header">
		<MetricCard
			styles={['border: none']}
			title="Distinct Hopsitalizations"
			value={501}
		/>
		<MetricCard
			styles={['border: none']}
			title="Unique Individuals"
			value={10}
		/>
	</div>
</Page>




<style>
	.metrics-header {
		display: flex;
	}
</style>
