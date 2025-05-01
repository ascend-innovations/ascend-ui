<script>
	export let maxlength = 160,
		text = ''
</script>

<div class={`characters-remaining width-100 ${text.length > maxlength ? 'error' : ''}`}>
	{text.length}/{maxlength}
</div>
