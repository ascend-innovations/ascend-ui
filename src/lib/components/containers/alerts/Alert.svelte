<script>
	import { Tag } from '$lib/index.js'

	export let body,
		button = null,
		icon = null,
		tag = false,
		title,
		styles = []
</script>

<div
	class="alert"
	style={styles.join(';')}
>
	<div class="alert__content">
		<div class="alert__icon">
			{#if icon}
				<svelte:component this={icon} />
			{/if}
		</div>
		<div class="alert__text">
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
				{@html body}
			</div>
		</div>
	</div>
	{#if button}
		<div class="alert__control">
			<svelte:component this={button} />
		</div>
	{/if}
</div>
