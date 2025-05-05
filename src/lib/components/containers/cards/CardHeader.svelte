<script>
	import { DefaultTooltipElement, Button, ChevronSingleRightSmallIcon } from '$lib/index.js'
	export let icon = null,
		title = '',
		titleTooltip = null,
		titleButton = null
</script>

{#if icon || title || titleTooltip}
	<div class="card-header">
		{#if icon}
			<div class="card-header__icon">
				<svelte:component this={icon} />
			</div>
		{/if}
		{#if title}
			<div class="headline-l-m card-header__title">
				{title}
			</div>
		{/if}
		{#if titleTooltip}
			<DefaultTooltipElement>
				{titleTooltip?.content}
			</DefaultTooltipElement>
		{/if}
		{#if titleButton}
			<div class="card-header__button">
				<Button
					classes={['btn-link', 'btn-m']}
					rightIcon={ChevronSingleRightSmallIcon}
					text={titleButton?.text || 'See More'}
					url={titleButton?.url || '#'}
				/>
			</div>
		{/if}
	</div>
{/if}
