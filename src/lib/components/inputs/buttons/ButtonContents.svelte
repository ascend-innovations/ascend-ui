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
			<div class="button-contents--block">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={topIcon} />
				{/if}
				{text}
			</div>
		{:else if bottomIcon}
			<div class="button-contents--block">
				{text}
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={bottomIcon} />
				{/if}
			</div>
		{:else if leftIcon && rightIcon}
			<div class="button-contents--inline">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={leftIcon} />
				{/if}
				{text}
				<svelte:component this={rightIcon} />
			</div>
		{:else if leftIcon}
			<div class="button-contents--inline">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={leftIcon} />
				{/if}
				{text}
			</div>
		{:else if rightIcon}
			<div class="button-contents--inline">
				{text}
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					<svelte:component this={rightIcon} />
				{/if}
			</div>
		{:else}
			<div class="button-contents--block">
				{#if loading}
					<ProgressSpinner active={true} />
				{:else}
					{text}
				{/if}
			</div>
		{/if}
	{:else}
		<div class="button-contents--block">
			{#if loading}
				<ProgressSpinner active={true} />
			{:else}
				<svelte:component this={leftIcon || rightIcon || topIcon || bottomIcon} />
			{/if}
		</div>
	{/if}
</div>
