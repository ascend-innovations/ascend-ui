<script>
	import { ButtonContents } from '$lib/index.js'

	export let bottomIcon = null,
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
</script>

<a
	class={`
		link-button-link
		semibold
		${classes?.includes('btn-full') ? 'btn-full' : 'btn-fit'}
	`}
	data-sveltekit-preload-code={preload ? '' : 'off'}
	data-sveltekit-preload-data={preload ? '' : 'off'}
	data-sveltekit-reload={preload ? '' : 'off'}
	href={disabled ? '#' : url}
	style={styles.join(';')}
	target={target ? '_blank' : ''}
	{disabled}
>
	<div
		class={`
			btn-content-wrapper
			${classes?.join(' ') ?? ''}
			${disabled ? 'btn-disabled' : ''}
		`}
		style={styles.join(';')}
	>
		<ButtonContents
			{bottomIcon}
			{leftIcon}
			{rightIcon}
			{text}
			{topIcon}
		/>
	</div>
</a>
