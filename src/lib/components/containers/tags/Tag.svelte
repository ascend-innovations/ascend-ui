<script>
	export let content = '',
		icon = null,
		side = '',
		type = ''
</script>

<div class={`tag semibold ${type}`}>
	{#if icon && side === 'left'}
		<svelte:component this={icon} />
	{/if}
	{content}
	{#if icon && side === 'right'}
		<svelte:component this={icon} />
	{/if}
</div>

<style>
	.tag {
		align-items: center;
		border-radius: 150px;
		border: none;
		color: var(--neutral-base);
		display: flex;
		gap: var(--spacing02);
		justify-content: space-between;
		padding: 0px var(--spacing05) var(--spacing01);
		width: fit-content;
	}
	*[class*='prominent'] {
		color: var(--neutral-base);
	}

	.error-prominent {
		background-color: var(--error-base);
	}
	.neutral-prominent {
		background-color: var(--neutral-base);
		color: var(--white-trans-base);
	}
	.secondary-prominent {
		background-color: var(--secondary-base);
	}
	.success-prominent {
		background-color: var(--success-base);
	}
	.warning-prominent {
		background-color: var(--warning-base);
	}
	.primary-prominent {
		background-color: var(--primary-base);
	}
	.error-subtle {
		background-color: var(--error-100);
		color: var(--error-800);
	}
	.neutral-subtle {
		background-color: var(--neutral-050);
		color: var(--neutral-800);
	}
	.secondary-subtle {
		background-color: var(--secondary-100);
		color: var(--secondary-800);
	}
	.success-subtle {
		background-color: var(--success-100);
		color: var(--success-800);
	}
	.warning-subtle {
		background-color: var(--warning-100);
		color: var(--warning-800);
	}
</style>
