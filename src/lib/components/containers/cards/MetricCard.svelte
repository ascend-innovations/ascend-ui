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
	<div class="card-wrapper no-gap">
		<div class="body-bold-body-xs semibold neutral-400-text truncate-text">{title}</div>
		<div class="headline-l-xl">{value}</div>
	</div>
</Card>
