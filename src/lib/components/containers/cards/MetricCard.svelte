<script>
	import { Card } from '$lib/index.js'

	export let callback = null,
		icon = null,
		styles = [],
		title = '',
		url = '',
		value = ''
</script>

<Card
	classes={['card-s']}
	{callback}
	{icon}
	{styles}
	{url}
>
	<div class="body-s metric-card-text-color semibold">{title}</div>
	<div class="headline-l-xl semibold">{value}</div>
</Card>
