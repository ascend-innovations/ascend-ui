<script>
	export let colorData = []
</script>

<div class="map-color-key">
	{#each colorData as color}
		<div class="map-color-key__color-block">
			<div
				class="map-color-key__shade"
				style="background-color: {color.value}"
			></div>
			<p class="body-s neutral-400-text">{color.text}</p>
		</div>
	{/each}
</div>
