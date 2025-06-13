<script>
	import { onMount } from 'svelte';

	export let id='', 
		height = '',
		width = '',
		padding = ''


	onMount(() => {
		let el = document.getElementById(`${id}-text-bubble`);
		if (!el) return; 
		if(height){el.style.height = height;}
		if(width){el.style.width = width;}
		
		let bubbleContent = el.querySelector(".text-bubble__content");
		if (bubbleContent && padding) {
			bubbleContent.style.padding = padding;
		}
	});


</script>

<div id={`${id}-text-bubble`} class="text-bubble">
	<div class="text-bubble__content">
		<slot />
	</div>
	<div class="text-bubble__arrow" />
</div>
