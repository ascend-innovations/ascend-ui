<!-- svelte-ignore unused-export-let -->
<script>
	import { ProgressSpinner } from '$lib/index.js'

	export let bottomIcon = null,
		disabled = false,
		leftIcon = null,
		loading = false,
		rightIcon = null,
		text = '',
		topIcon = null
</script>

<div class="button-contents">
	{#if text}
		{#if topIcon}
			<div class="block-content">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={topIcon} />
				{/if}
				{text}
			</div>
		{:else if bottomIcon}
			<div class="block-content">
				{text}
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={bottomIcon} />
				{/if}
			</div>
		{:else if leftIcon && rightIcon}
			<div class="inline-content">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={leftIcon} />
				{/if}
				{text}
				<svelte:component this={rightIcon} />
			</div>
		{:else if leftIcon}
			<div class="inline-content">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={leftIcon} />
				{/if}
				{text}
			</div>
		{:else if rightIcon}
			<div class="inline-content">
				{text}
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={rightIcon} />
				{/if}
			</div>
		{:else}
			<div class="block-content">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					{text}
				{/if}
			</div>
		{/if}
	{:else}
		<div class="block-content">
			{#if loading}
				<ProgressSpinner active={true} />
			{:else}
				<svelte:component this={leftIcon || rightIcon || topIcon || bottomIcon} />
			{/if}
		</div>
	{/if}
</div>

<style>
	.button-contents,
	.block-content,
	.inline-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.block-content {
		flex-direction: column;
		gap: var(--spacing03);
	}
	.inline-content {
		flex-direction: row;
		gap: var(--spacing05);
	}
</style>
