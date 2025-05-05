<script>
	import { ButtonContents } from '$lib/index.js'

	export let bottomIcon,
		classes,
		disabled,
		leftIcon,
		loading,
		rightIcon,
		styles = [],
		text,
		topIcon
</script>

<button
	{disabled}
	class={`
		standard-button
		semibold
		${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
		${disabled ? 'btn-disabled' : ''}
	`}
	style={styles.join(';')}
>
	<div
		class={`
			button__content-wrapper
			${classes?.join(' ') ?? ''}
			${disabled ? 'btn-disabled' : ''}
		`}
		style={styles.join(';')}
	>
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
