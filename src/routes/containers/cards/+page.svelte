<script>
	import { Card, NewNotificationIcon, Page, MetricCard, LoginCard } from '$lib/index.js'
</script>

<Page>
	<h1>Cards</h1>
	<Card
		classes={['card-s']}
		title="Example Card"
		url={'/'}
		icon={NewNotificationIcon}
	>
		<p>Description of an example card</p>
	</Card>

	<LoginCard  ascendLogo />

	<div class="metrics-header">
		<MetricCard
			styles={['border: none']}
			title="Distinct Hopsitalizations"
			value={501}
		/>
		<MetricCard
			styles={['border: none']}
			title="This is super duper long to test something that I think is really really coooooooooooooooool.
			This is even more text just to see how far the component could possibly stretch if need be by the wonderful UX designers at Ascend Innovations. "
			value={10}
		/>
		
	</div>
</Page>

<style>
	.metrics-header {
		display: flex;
	}
</style>
