<script>
	import { capitalize, InputError } from '$lib/index.js'

	export let value,
		label = '',
		name = label,
		type = 'text',
		placeholder = '',
		validationMessage = `Please enter your ${label}`,
		validValue,
		validationCallback
</script>

<div class="login-element">
	<label
		for={label}
		class="body-m-semibold"
	>
		{capitalize(label)}
	</label>
	{#if type === 'text'}
		<input
			autocomplete={label}
			bind:value
			class="form-text-input {validValue === false ? 'form-text-input-error' : ''}"
			id={label}
			{name}
			on:blur={validationCallback}
			placeholder={placeholder || `Enter your ${label}`}
			type="text"
		/>
	{:else if type === 'email'}
		<input
			autocomplete={label}
			bind:value
			class="form-text-input {validValue === false ? 'form-text-input-error' : ''}"
			id={label}
			{name}
			on:blur={validationCallback}
			placeholder={placeholder || `Enter your ${label}`}
			type="email"
		/>
	{:else if type === 'password'}
		<input
			autocomplete={label}
			bind:value
			class="form-text-input {validValue === false ? 'form-text-input-error' : ''}"
			id={label}
			{name}
			on:blur={validationCallback}
			placeholder={placeholder || `Enter your ${label}`}
			type="password"
		/>
	{/if}
	{#if validValue === false}
		<InputError text={validationMessage} />
	{/if}
</div>
