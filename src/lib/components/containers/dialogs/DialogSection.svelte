<script>
	export let heading
</script>

<div class="dialog-section">
	<div class="dialog-section-heading headline-l-s">
		{heading}
	</div>
	<div class="dialog-section-content">
		<slot />
	</div>
</div>
