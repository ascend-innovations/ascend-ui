<script>
	export let maxlength = 160,
		text = ''
</script>

<div class={`character-counter width-100 ${text.length > maxlength ? 'character-counter--error' : ''}`}>
	{text.length}/{maxlength}
</div>
