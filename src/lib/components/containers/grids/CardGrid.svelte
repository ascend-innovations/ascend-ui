<section class="list-container">
	<div class="card-grid">
		<slot />
	</div>
</section>

<style>
	.list-container {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.card-grid {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing09);
		justify-content: center;
	}

	@media screen and (min-width: 768px) {
		.card-grid {
			justify-content: flex-start;
		}
	}
</style>
