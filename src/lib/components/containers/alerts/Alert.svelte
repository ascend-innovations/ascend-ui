<script>
	import { Tag } from '$lib/index.js'
	import { onMount } from 'svelte';
	import { browser } from '$app/environment'

	export let body,
	id="",
	button = null,
		icon = null,
		tag = false,
		title,
		styles = []
	/**
	 * ErrorAlert.svelte
	 * 
	 * A flexible error alert component for displaying error messages, icons, tags, and action buttons.
	 * 
	 * ## Props
	 * @prop {string} id - A unique identifier for the alert instance. Used to generate unique DOM element IDs.
	 * @prop {string} body - The main message or HTML content to display in the alert body.
	 * @prop {SvelteComponent|HTMLElement|string|null} button - (Optional) A Svelte component constructor, HTMLElement, or HTML string to render as the alert's action button.
	 * @prop {SvelteComponent|HTMLElement|string|null} icon - (Optional) A Svelte component constructor, HTMLElement, or HTML string to render as the alert's icon.
	 * @prop {boolean|string} tag - (Optional) If truthy, displays a tag using the Tag component. Can be a string for tag content.
	 * @prop {string} title - The alert's headline/title.
	 * */

	onMount(() => {
		if (browser) {
			let el = document.getElementById(`${id}-alert`);
			if (!el) return;

			if(title) {
				const titleElement = el.querySelector('#alert__title');
				if (titleElement) {
					titleElement.innerText = title;
				}
			}

			const bodyElement = el.querySelector('#alert__body');
			if (bodyElement) {
				bodyElement.innerHTML = body;
			}

			const alertIcon = el.querySelector('#alert__icon');
			if (alertIcon) {
				alertIcon.innerHTML = ''; 
				if (icon && typeof icon === 'function') { //Function type for SvelteComponent
					new icon({ target: alertIcon });
				} else if (icon && icon instanceof HTMLElement) {
                	alertIcon.innerHTML = icon.innerHTML || '';
				} else if (typeof icon === 'string' || icon instanceof String) {
					alertIcon.innerHTML = icon;
           	 	} else if (!icon) {
					alertIcon.style.display = 'none';
				}
			}

			const alertButton = el.querySelector('#alert__button');
 			if(alertButton){
				alertButton.innerHTML = '';
				if (button && typeof button === 'function') {
					new button({ target: alertButton });
				} else if (button && button instanceof HTMLElement) {
					alertButton.innerHTML = button.innerHTML || '';
				} else if (button && button instanceof String) { //html string literal
					alertButton.innerHTML = button;
				} else {
					alertButton.style.display = 'none';
				}
			}
			
			const tagElement = el.querySelector('#alert__tag');
            if (tagElement) {
                tagElement.innerHTML = '';
                if (tag) {
                    new Tag({
                        target: tagElement,
                        props: {
                            content: tag,
                            type: "neutral-subtle"
                        }
                    });
                }
            }
		}
	});
</script>

<div
	id={`${id}-alert`}
	class="alert"
	style={styles.join(';')}
>
	<div class="alert__content">
		<div id="alert__icon" class="alert__icon"></div>
		<div class="alert-text">
			<div id="alert__title" class="headline-l-xs"></div>
			<div id="alert__tag"></div>
			<div id="alert__body" class="body-s"></div> 
		</div>
	</div>
		<div class="alert__control">
			<div id="alert__button" class="alert-button">
			</div>
		</div>
</div>
