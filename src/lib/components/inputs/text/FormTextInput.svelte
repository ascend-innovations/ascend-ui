<script>
	import { capitalize, InputError } from '$lib/index.js'

	export let value,
		label = '',
		name = label,
		type = 'text',
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
			name={name}
			on:blur={validationCallback}
			placeholder={`Enter your ${label}`}
			type="text"
		/>
	{:else if type === 'email'}
		<input
			autocomplete={label}
			bind:value
			class="form-text-input {validValue === false ? 'form-text-input-error' : ''}"
			id={label}
			name={name}
			on:blur={validationCallback}
			placeholder={`Enter your ${label}`}
			type="email"
		/>
	{:else if type === 'password'}
		<input
			autocomplete={label}
			bind:value
			class="form-text-input {validValue === false ? 'form-text-input-error' : ''}"
			id={label}
			name={name}
			on:blur={validationCallback}
			placeholder={`Enter your ${label}`}
			type="password"
		/>
	{/if}
	{#if validValue === false}
		<InputError text={`Please enter your ${label}`} />
	{/if}
</div>
