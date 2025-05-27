<script>
	import { browser } from '$app/environment'
	import { ChevronSingleDownSmallIcon, ChevronSingleUpSmallIcon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let title,
		defaultOpen = false

	let detailsElement,
		summaryElement,
		open = defaultOpen

	function detailsClick(e) {
		open = !summaryElement.parentElement.open
	}

	onMount(() => {
		if (browser) {
			detailsElement.open = defaultOpen
		}
	})
</script>

<details
	bind:this={detailsElement}
	class="category-details"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<summary
		bind:this={summaryElement}
		id={`${title}-details`}
		class="option-title"
		on:click={(e) => detailsClick(e)}
	>
		<h3 class="headline-l-s">{title}</h3>
		<span class="summary-icon">
			{#if summaryElement?.id === `${title}-details` && open}
				<svelte:component this={ChevronSingleUpSmallIcon} />
			{:else}
				<svelte:component this={ChevronSingleDownSmallIcon} />
			{/if}
		</span>
	</summary>
	<div class="content">
		<slot />
	</div>
</details>

<style>
	.category-details {
		width: 100%;
	}

	.option-title {
		padding: var(--spacing09) 0;
		list-style: none;
		display: flex;
	}

	::-webkit-details-marker {
		display: none;
	}

	.summary-icon {
		display: inline-block;
		margin-left: auto;
	}

	.content {
		margin-bottom: var(--spacing09);
	}
</style>
