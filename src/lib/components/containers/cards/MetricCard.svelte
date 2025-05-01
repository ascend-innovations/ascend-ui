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
		<div class="body-bold-body-xs semibold card-color-override truncate-text">{title}</div>
		<div class="headline-l-xl">{value}</div>
	</div>
</Card>

<style>
	.card-color-override {
		color: var(--neutral-400);
	}
	.truncate-text {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.card-wrapper {
		gap: 0px;
	}
</style>
