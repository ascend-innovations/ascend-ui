<script>
	import { ButtonContents } from '$lib/index.js'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'

	export let id="",
		bottomIcon,
		classes,
		disabled,
		leftIcon,
		loading,
		rightIcon,
		styles = [],
		text,
		topIcon

	onMount(() => {
		if(!browser) return;
		let el = document.getElementById(`${id}-button__standard`);
		if (!el) return;

		// Set styles
		if (styles && styles.length > 0) {
			el.style.cssText = styles.join(';');
		}

		el.disabled = disabled;

		// Build class string
		let fullClass = 'standard-button semibold';
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

		let contentWrapper = el.querySelector('#button__content-wrapper');
		
		if (contentWrapper) {
			contentWrapper.className = `button__content-wrapper ${classes?.join(' ') ?? ''} ${disabled ? ' btn-disabled' : ''}`;
			contentWrapper.style.cssText = styles.join(';');
		}
	});
</script>

<button id="{`${id}-button__standard`}">
	<div id="button__content-wrapper">
		<ButtonContents
			{bottomIcon}
			{disabled}
			{leftIcon}
			{loading}
			{rightIcon}
			{text}
			{topIcon}
		/>
	</div>
</button>

