<script>
	import { BackButton, NextButton } from '$lib/index.js'

	export let currentPage = 1,
		totalPages = 1,
		leftClickCallback = null,
		rightClickCallback = null
</script>

<div class="pagination-bar">
	<div class="back-button">
		<BackButton
			arrow={true}
			callback={leftClickCallback}
		/>
	</div>
	<div class="page-number">
		Page {currentPage} of {totalPages}
	</div>
	<div class="next-button">
		<NextButton
			arrow={true}
			callback={rightClickCallback}
		/>
	</div>
</div>
