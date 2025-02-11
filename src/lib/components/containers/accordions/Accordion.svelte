<script>
	import { ChevronSingleDownSmallIcon, ChevronSingleUpSmallIcon } from '$lib/index.js'

	export let title

	let detailsElement,
		open = false

	function detailsClick(e) {
		detailsElement = document.getElementById(e.target.id)
		open = !detailsElement.parentElement.open
	}
</script>

<details class="accordion-details">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<summary
		id={`${title}-details`}
		class="accordion-title"
		on:click={(e) => detailsClick(e)}
	>
		<h3 class="headline-l-s">{title}</h3>
		<span class="accordion-icon">
			{#if detailsElement?.id === `${title}-details` && open}
				<svelte:component this={ChevronSingleUpSmallIcon} />
			{:else}
				<svelte:component this={ChevronSingleDownSmallIcon} />
			{/if}
		</span>
	</summary>
	<div class="accordion-content">
		<slot />
	</div>
</details>
