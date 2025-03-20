<script>
	import { BackButton, NextButton } from '$lib/index.js'

	export let currentPage = 1,
		totalPages = 1,
		leftClickCallback = null,
		rightClickCallback = null,
		nextButtonDisabled = false,
		backButtonDisabled = false
</script>

<div class="pagination-bar">
	<div class="back-button">
		<BackButton
			arrow={true}
			callback={leftClickCallback}
			disabled={backButtonDisabled}
		/>
	</div>
	<div class="page-number">
		Page {currentPage} of {totalPages}
	</div>
	<div class="next-button">
		<NextButton
			arrow={true}
			callback={rightClickCallback}
			disabled={nextButtonDisabled}
		/>
	</div>
</div>

<style>
	.pagination-bar {
		align-items: center;
		background-color: var(--background-base);
		bottom: 0;
		display: flex;
		height: var(--spacing12);
		justify-content: space-between;
		padding: var(--spacing09);
	}
	.page-number {
		color: var(--neutral-400);
	}
</style>
