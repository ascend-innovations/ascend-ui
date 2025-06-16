<script>
	import { browser } from '$app/environment'
	import { ButtonContents } from '$lib/index.js'
	import { onMount } from 'svelte';
	

	export let id='', 
		bottomIcon = null,
		classes,
		disabled,
		leftIcon = null,
		preload = true,
		rightIcon = null,
		styles = [],
		text = '',
		topIcon = null,
		url = '',
		target = false


	onMount(() => {
		if(!browser) return;
		let el = document.getElementById(`${id}-button__link`);
		if (!el) return;

		// Set styles
		if (styles && styles.length > 0) {
			el.style.cssText = styles.join(';');
		}

		el.disabled = disabled;

		// Build class string
		let fullClass = 'link-button semibold';
		if (classes && classes.length > 0) {
			if (classes.includes('btn-full')) {
				fullClass += ' btn-full';
			} else if (classes.includes('btn-fit')) {
				fullClass += ' btn-fit';
			}
		}
		if (disabled) {
			fullClass += ' btn-disabled';
		}
		el.className = fullClass;

		// Set href and target
        el.setAttribute('href', disabled ? '#' : url);
        el.setAttribute('target', target ? '_blank' : '');

        // Set SvelteKit preloading attributes
        // el.setAttribute('data-sveltekit-preload-code', preload ? '' : 'off');
        // el.setAttribute('data-sveltekit-preload-data', preload ? '' : 'off');
        // el.setAttribute('data-sveltekit-reload', preload ? '' : 'off');


		let contentWrapper = el.querySelector('#button__content-wrapper');
		
		if (contentWrapper) {
			contentWrapper.className = `button__content-wrapper ${classes?.join(' ') ?? ''} ${disabled ? ' btn-disabled' : ''}`;
			contentWrapper.style.cssText = styles.join(';');
		}
	});

</script>

<a
	id={`${id}-button__link`}
>
	<div id="button__content-wrapper">
		<ButtonContents
			{id}
			{bottomIcon}
			{leftIcon}
			{rightIcon}
			{text}
			{topIcon}
		/>
	</div>
</a>
