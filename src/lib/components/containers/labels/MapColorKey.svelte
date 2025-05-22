<script>
	export let colorData = []
</script>

<div class="map-color-key">
	{#each colorData as color}
		<div class="color">
			<div
				class="shade"
				style="background-color: {color.value}"
			></div>
			<p class="body-s">{color.text}</p>
		</div>
	{/each}
</div>

<style>
	.map-color-key {
		margin-top: var(--spacing09);
		display: flex;
		gap: var(--spacing05);
	}
	.color {
		display: flex;
		align-items: center;
		gap: var(--spacing03);
	}
	.shade {
		height: 8px;
		width: 8px;
		border-radius: 4px;
	}
	.body-s {
		color: var(--neutral-400);
	}
</style>
