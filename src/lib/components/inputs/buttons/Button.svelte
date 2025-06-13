<script>
	import { LinkButton, StandardButton } from '$lib/index.js'

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
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={callback || ''}
	on:keypress={callback || ''}
	class={`
		button-wrapper
		${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
		${disabled ? 'btn-disabled' : ''}
	`}
>
	{#if url?.length}
		<LinkButton
			{bottomIcon}
			{classes}
			{disabled}
			{leftIcon}
			{preload}
			{rightIcon}
			{styles}
			{text}
			{topIcon}
			{url}
			{target}
		/>
	{:else}
		<StandardButton
			id={id}
			{bottomIcon}
			{classes}
			{disabled}
			{leftIcon}
			{loading}
			{rightIcon}
			{styles}
			{text}
			{topIcon}
		/>
	{/if}
</div>
