<script>
	import { browser } from '$app/environment'
	import { ChevronSingleDownSmallIcon } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let title,
		defaultOpen = false

	let detailsElement,
		summaryElement,
		chevron,
		open = defaultOpen

	function detailsClick(e) {
		open = !summaryElement.parentElement.open
		chevron.style.transform = !open ? 'rotate(180deg)' : 'rotate(0deg)'
	}

	onMount(() => {
		if (browser) {
			detailsElement = document.getElementById(`${title}-details`)
			summaryElement = document.getElementById(`${title}-details__summary`)
			chevron = document.querySelector(`#${title}-details__summary .accordion__icon`)
			detailsElement.open = defaultOpen
			if (defaultOpen) {
				chevron.style.transform = 'rotate(180deg)'
			}

			detailsElement.addEventListener('toggle', (e) => detailsClick(e))
		}
	})
</script>

<details id={`${title}-details`} class="accordion width-100">
	<summary
		id={`${title}-details__summary`}
		class="accordion__title"
	>
		<h3 class="headline-l-s">{title}</h3>
		<span class="accordion__icon">
			<ChevronSingleDownSmallIcon />
		</span>
	</summary>
	<div class="accordion__content">
		<slot />
	</div>
</details>
