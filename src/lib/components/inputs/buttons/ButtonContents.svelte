<!-- svelte-ignore unused-export-let -->
<script>
	import { ProgressSpinner } from '$lib/index.js'
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let id="", 
		bottomIcon = null,
		disabled = false,
		leftIcon = null,
		loading = false,
		rightIcon = null,
		text = '',
		topIcon = null

		function mountIcon(icon, htmlElement) {
			if(!htmlElement) return;
			htmlElement.innerHTML = '';
			if (icon && typeof icon === 'function') {
				new icon({ target: htmlElement });
			} else if (icon && icon instanceof HTMLElement) {
				htmlElement.innerHTML = icon.innerHTML || '';
			} else if (icon && icon instanceof String) { //html string literal
				htmlElement.innerHTML = icon;
			} else {
				htmlElement.style.display = 'none';
			}
		}
	

		onMount(() => {
			if (!browser) return;

			const el = document.getElementById(`${id}-button__button-contents`);
			if (!el) return;
			
			let innerWrapper = el.querySelector('#button-contents__inner-wrapper');
			if(!innerWrapper){console.error(`Inner wrapper not found for button with id: ${id}`); return;}	
			innerWrapper.innerHTML = '';


			let iconNode = document.createElement('div');
			iconNode.id = `${id}-button__icon-node`;
			
			let secondaryIconNode

			if(leftIcon && rightIcon){
				secondaryIconNode = document.createElement('div');
				secondaryIconNode.id = `${id}-button__secondary-icon-node`;
			}

			if (loading){
				mountIcon(ProgressSpinner, iconNode);
			} else if (topIcon) {
				mountIcon(topIcon, iconNode);
			} else if (bottomIcon) {
				mountIcon(bottomIcon, iconNode);
			} else if(leftIcon && rightIcon){
				mountIcon(leftIcon, iconNode);
				mountIcon(rightIcon, secondaryIconNode);
			} else if (leftIcon) {
				mountIcon(leftIcon, iconNode);
			} else if (rightIcon) {
				mountIcon(rightIcon, iconNode);
			} else {
				iconNode.style.display = 'none';
			}

			if(leftIcon && rightIcon){
				mountIcon(rightIcon, secondaryIconNode);
			}

			let textNode = document.createElement('div');
			textNode.id = `${id}-button__text-node`;
			textNode.textContent = text;

			if (innerWrapper) {
				if(text){
					if(topIcon){
						innerWrapper.className = ('button-contents--block');
						innerWrapper.appendChild(iconNode);
						innerWrapper.appendChild(textNode);
					} else if(bottomIcon){
						innerWrapper.className = ('button-contents--block');
						innerWrapper.appendChild(textNode);
						innerWrapper.appendChild(iconNode);
					} else if(leftIcon && rightIcon){
						innerWrapper.className = ('button-contents--inline');
						innerWrapper.appendChild(iconNode);
						innerWrapper.appendChild(textNode);
						innerWrapper.appendChild(secondaryIconNode);
					} else if(leftIcon){
						innerWrapper.className = ('button-contents--inline');
						innerWrapper.appendChild(iconNode);
						innerWrapper.appendChild(textNode);
					} else if(rightIcon){
						innerWrapper.className = ('button-contents--inline');
						innerWrapper.appendChild(textNode);
						innerWrapper.appendChild(iconNode);
					} else {
						innerWrapper.className = ('button-contents--block');
						if(loading){
							innerWrapper.appendChild(iconNode);
						} else{
							innerWrapper.appendChild(textNode);
						}
					}
				} else{
					innerWrapper.className = ('button-contents--block');
					innerWrapper.appendChild(iconNode);
				}
			}
		});

</script>

<div id={`${id}-button__button-contents`} class="button-contents">
	<div id="button-contents__inner-wrapper"> </div>
</div>
