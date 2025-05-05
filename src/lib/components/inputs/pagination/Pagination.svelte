<script>
	import { BackButton, NextButton } from '$lib/index.js'

	export let currentPage = 1,
		totalPages = 1,
		leftClickCallback = null,
		rightClickCallback = null,
		nextButtonDisabled = false,
		backButtonDisabled = false
</script>

<div class="pagination">
	<div class="pagination__back-button">
		<BackButton
			arrow={true}
			callback={leftClickCallback}
			disabled={backButtonDisabled}
		/>
	</div>
	<div class="neutral-400-text">
		Page {currentPage} of {totalPages}
	</div>
	<div class="pagination__next-button">
		<NextButton
			arrow={true}
			callback={rightClickCallback}
			disabled={nextButtonDisabled}
		/>
	</div>
</div>
