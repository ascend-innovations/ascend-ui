<script>
	import { Tag } from '$lib/index.js'

	export let body,
		button = null,
		icon,
		tag = false,
		title
</script>

<div class="alert">
	<div class="alert-content">
		<div class="alert-icon">
			<svelte:component this={icon} />
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
				{body}
			</div>
		</div>
	</div>
	<div class="alert-control">
		{#if button}
			<div class="alert-button">
				<svelte:component this={button} />
			</div>
		{/if}
	</div>
</div>

<style>
	.alert {
		border-radius: var(--spacing09);
		padding: var(--spacing09);
		display: flex;
		flex-direction: column;
		gap: var(--spacing06);
	}
	
	@media screen and (min-width: 768px) {
		.alert {
			border: var(--spacing01) solid var(--neutral-050);
			flex-direction: row;
			justify-content: space-between;
		}
		.alert-content {
			display: flex;
			gap: var(--spacing06);
		}
		.alert-icon {
			align-items: center;
			background-color: var(--neutral-000);
			border-radius: var(--border-radius-xl);
			display: flex;
			height: var(--spacing12);
			justify-content: center;
			padding: var(--spacing05);
			width: var(--spacing12);
		}
		.alert-text {
			color: var(--neutral-base);
			display: flex;
			flex-direction: column;
			gap: var(--spacing03);
			height: 100%;
			justify-content: space-between;
		}
		.alert-control {
			display: flex;
			min-width: fit-content;
		}
	}
</style>
