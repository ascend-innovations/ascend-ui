<script>
	import { browser } from '$app/environment'
	import { LinkButton, StandardButton } from '$lib/index.js'
	import { onMount, onDestroy } from 'svelte'

	export let id="", 
		bottomIcon = null,
		callback = null,
		classes = ['btn-fit', 'btn-m', 'btn-primary', 'btn-rect'],
		disabled = false,
		leftIcon = null,
		loading = false,
		preload,
		rightIcon = null,
		styles = [],
		text = '',
		topIcon = null,
		url = '',
		target = false

	let buttonInstance;

	onMount(() => {
		if(!browser) return;
		
		let el = document.getElementById(`${id}-button__wrapper`);

		if (!el) return;

		// Set styles
		if (styles && styles.length > 0) {
			el.style.cssText = styles.join(';');
		}

		el.className = `
			button-wrapper
			${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
			${disabled ? 'btn-disabled' : ''}
		`;
		
		el.addEventListener('click', callback || (() => {}));
		el.addEventListener('keypress', callback || (() => {}));
	
		const ButtonComponent = url?.length ? LinkButton : StandardButton;
		 buttonInstance = new ButtonComponent({
            target: el,
            props: {
                id,
                bottomIcon,
                callback,
                classes,
                disabled,
                leftIcon,
                loading,
                preload,
                rightIcon,
                styles,
                text,
                topIcon,
                url,
                target
            }
        });
	
	
	});

	onDestroy(() => {
		if(!browser) return;
		let el = document.getElementById(`${id}-button__wrapper`);

		if (el) {
			el.removeEventListener('click', callback);
			el.removeEventListener('keypress', callback);
		}

		buttonInstance?.$destroy();
		buttonInstance = null;
    });
		
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id={`${id}-button__wrapper`}></div>
