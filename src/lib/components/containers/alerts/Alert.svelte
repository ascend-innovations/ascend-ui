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
	<div class="alert-content">
		<div class="alert-icon">
			{#if icon}
				<svelte:component this={icon} />
			{/if}
		</div>
		<div class="alert-text">
			<div class="alert-title headline-l-xs">
				{title}
			</div>
			{#if tag}
				<Tag
					content={tag}
					type="neutral-subtle"
				/>
			{/if}
			<div class="alert-body body-s">
				{@html body}
			</div>
		</div>
	</div>
	{#if button}
		<div class="alert-control">
			<div class="alert-button">
				<svelte:component this={button} />
			</div>
		</div>
	{/if}
</div>
