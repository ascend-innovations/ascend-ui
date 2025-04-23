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
	<div class="card-wrapper">
		<div class="body-bold-body-xs semibold card-color-override">{title}</div>
		<div class="headline-l-xl">{value}</div>
	</div>
</Card>

<style>
	.card-color-override {
		color: var(--neutral-400);
	}
	.card-wrapper {
		gap:0px
	}
</style>
