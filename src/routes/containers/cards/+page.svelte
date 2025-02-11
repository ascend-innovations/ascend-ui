<script>
	import { Card, NewNotificationIcon, Page } from '$lib/index.js'
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
</Page>
