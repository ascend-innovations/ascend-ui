<script>
	import { Tag } from '$lib/index.js'

	export let body,
		button = null,
		icon = null,
		tag = false,
		title
</script>

<div class="alert alert--error">
	<div class="alert__content">
		<div class="alert__icon">
			{#if icon}
				<svelte:component this={icon} />
			{/if}
		</div>
		<div class="alert-text">
			<div class="headline-l-xs">
				{title}
			</div>
			{#if tag}
				<Tag
					content={tag}
					type="neutral-subtle"
				/>
			{/if}
			<div class="body-s">
				{body}
			</div>
		</div>
	</div>
	{#if button}
		<div class="alert__control">
			<div class="alert-button">
				<svelte:component this={button} />
			</div>
		</div>
	{/if}
</div>
