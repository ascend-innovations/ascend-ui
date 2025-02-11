<script>
	export let maxlength = 160,
		text = ''
</script>

<div class={`characters-remaining ${text.length > maxlength ? 'error' : ''}`}>
	{text.length}/{maxlength}
</div>
