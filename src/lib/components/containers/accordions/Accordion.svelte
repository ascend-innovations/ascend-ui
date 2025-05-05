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

<details bind:this={detailsElement} class="accordion width-100">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<summary
		bind:this={summaryElement}
		id={`${title}__details`}
		class="accordion__title"
		on:click={(e) => detailsClick(e)}
	>
		<h3 class="headline-l-s">{title}</h3>
		<span class="accordion__icon">
			{#if summaryElement?.id === `${title}__details` && open}
				<svelte:component this={ChevronSingleUpSmallIcon} />
			{:else}
				<svelte:component this={ChevronSingleDownSmallIcon} />
			{/if}
		</span>
	</summary>
	<div class="accordion__content">
		<slot />
	</div>
</details>
