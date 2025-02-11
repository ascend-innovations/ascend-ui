<script>
	import { ButtonContents } from '$lib/index.js'

	export let bottomIcon = null,
		classes,
		disabled,
		leftIcon = null,
		rightIcon = null,
		styles = [],
		text = '',
		topIcon = null,
		url = '',
		target = false
</script>

<a
	href={disabled ? '#' : url}
	target={target ? '_blank' : ''}
	{disabled}
	class={`
		link-button-link
		semibold
		${classes?.includes('btn-full') ? 'btn-full' : 'btn-fit'}
	`}
	style={styles.join(';')}
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
