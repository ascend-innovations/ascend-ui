<script>
	export let name
</script>

<div class="sample-button">
	<slot />
	<div class="sample-button__name">
		{name}
	</div>
</div>
