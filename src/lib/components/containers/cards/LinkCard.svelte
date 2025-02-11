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
	class="link-card"
>
	<StandardCard
		{callback}
		classes={[...classes, 'card-hover-link']}
		{icon}
		{styles}
		{title}
		{titleTooltip}
	>
		<slot />
	</StandardCard>
</a>
