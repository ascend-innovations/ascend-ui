<script>
	import { Button, FormTextInput, LoginPage, InputError } from '$lib/index.js'

	export let form
</script>

<LoginPage>
	<form
		method="post"
		name="login"
		action="?/login"
	>
		<FormTextInput
			label="email"
			type="email"
			name="email"
		/>
		<FormTextInput
			label="password"
			type="password"
			name="password"
		/>

		{#if form?.login_message}
			<InputError text={form.login_message} />
		{/if}

		<div class="login-button-row">
			<input
				class={`btn-full btn-l btn-primary btn-rect	semibold`}
				type="submit"
				value="Login"
			/>
		</div>
	</form>
</LoginPage>

<style>
	.login-button-row {
		width: 100%;
	}
	form {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing10);
		width: 100%;
	}
	input[type='submit'] {
		align-items: center;
		border-radius: var(--btn-border-radius);
		border: none;
		cursor: pointer;
		text-decoration: none;
	}
</style>
