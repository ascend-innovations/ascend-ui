<script>
	export let height = '',
		width = '',
		padding = ''
</script>

<div
	class="text-bubble"
	style={`
		${`height:${height}`}
		${`width:${width}`}
	`}
>
	<div
		class="text-bubble__content"
		style={`padding:${padding}`}
	>
		<slot />
	</div>
	<div class="text-bubble__arrow" />
</div>
