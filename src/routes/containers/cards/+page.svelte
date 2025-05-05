<script>
	import RegistrationCard from '$lib/components/containers/cards/RegistrationCard.svelte'
import PageBody from '$lib/components/containers/pages/PageBody.svelte'
import { Card, NewNotificationIcon, Page, MetricCard, LoginCard } from '$lib/index.js'
</script>

<Page>
	<PageBody size="full">
		<h1>Cards</h1>
		<Card
			classes={['card-s']}
			title="Standard Card"
		>
			<p>A standard small card example.</p>
		</Card>
		<Card
			classes={['card-m']}
			title="Link Card"
			url={'/containers/cards'}
			icon={NewNotificationIcon}
		>
			<p>A link medium card example. With an icon!</p>
		</Card>
		<Card
			classes={['card-l']}
			title="Large Standard Card"
		>
			<p>A standard large card example.</p>
		</Card>
	
		<h2>Metrics Card</h2>
		<MetricCard
			styles={['border: none']}
			title="Distinct Hopsitalizations"
			value={501}
		/>
	</PageBody>
</Page>

<style>
</style>
