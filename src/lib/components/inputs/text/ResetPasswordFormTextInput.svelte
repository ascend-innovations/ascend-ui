<script>
	import { capitalize, InputError } from '$lib/index.js'

	export let value,
		label = '',
		validValue,
		validationCallback
</script>

<div class="login-element">
	<label
		for={label}
		class="body-m-semibold"
	>
    {capitalize(label)}
    <input
        autocomplete={label}
        bind:value
        class={validValue === false ? 'error' : ''}
        id={label}
        name="password"
        on:blur={validationCallback}
        placeholder={`Enter your ${label}`}
        type="password"
    />
	{#if !value }
		<InputError text={`Please enter new password.`} />
	{:else if validValue === false}
		<InputError text={`New password does not meet below criteria.`} />
	{/if}
</div>

<style>
	.login-element {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: var(--spacing05);
		width: 100%;
	}
	input {
		border-radius: var(--spacing04);
		border: var(--spacing01) solid var(--neutral-100);
		padding: var(--spacing05) var(--spacing09);
		width: 100%;
	}
	input:invalid {
		border: var(--spacing01) solid var(--error-base);
	}
	.error {
		border-color: var(--error-500);
	}
</style>
