<script>
	import { Label } from '$lib/index.js'

	export let id = '',
		label = '',
		maxlength = '10',
		minlength = '10',
		phoneNumber = '',
		placeholder = '',
		required = false,
		styles = [],
		tabindex = ''
</script>

<div class="phone-number-control">
	<Label
		{id}
		{label}
	/>
	<input
		bind:value={phoneNumber}
		class="phone-number-input"
		style={styles.join(';')}
		type="tel"
		{id}
		{maxlength}
		{minlength}
		{placeholder}
		{required}
		{tabindex}
	/>
</div>

<style>
	.phone-number-control {
		display: flex;
		flex-direction: column;
		gap: var(--spacing03);
	}
</style>
