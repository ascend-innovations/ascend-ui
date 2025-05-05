<script>
	import { StandardCard } from '$lib/index.js'

	export let callback = undefined,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		titleTooltip = null,
		url = ''
</script>

<a
	href={url}
	class="card--link"
>
	<StandardCard
		{callback}
		classes={[...classes]}
		{icon}
		{styles}
		{title}
		{titleTooltip}
	>
		<slot />
	</StandardCard>
</a>
