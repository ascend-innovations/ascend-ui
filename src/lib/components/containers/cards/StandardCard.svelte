<script>
	import { CardHeader } from '$lib/index.js'

	export let callback = undefined,
		classes = [],
		icon = undefined,
		styles = [],
		title = '',
		titleTooltip = null,
		chart = false,
		titleButton = false,
		titleButtonText = 'See More'
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`card ${classes?.join(' ') ?? ''}`}
	style={styles?.join('; ')}
	on:click={callback ? callback : ''}
	on:keyup={callback ? callback : ''}
>
	<CardHeader
		{icon}
		{title}
		{titleTooltip}
		{titleButton}
		{titleButtonText}
	/>
	<div class="card__content width-100 body-s-s">
		<slot />
	</div>
</div>
