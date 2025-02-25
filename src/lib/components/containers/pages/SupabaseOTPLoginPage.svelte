<script>
	import { FormTextInput, LoginPage, InputError } from '$lib/index.js'

	export let form

	let otp = ''
</script>

<LoginPage>
	<form
		method="POST"
		action="?/verifyOtp"
	>
		<FormTextInput
			name="otp"
			bind:value={otp}
			label="One-Time Passcode"
			type="password"
			required
		/>

		{#if form?.otp_auth_message}
			<InputError text={form.otp_auth_message} />
		{/if}

		<div class="login-button-row">
			<input
				class="btn-full btn-l btn-primary btn-rect semibold"
				type="submit"
				value="Verify"
			/>
		</div>
	</form>
	<form
		method="POST"
		action="?/resendOtp"
	>
		{#if form?.otp_send_message}
			<InputError text={form.otp_send_message} />
		{/if}

		<div class="login-button-row resend-section">
			<input
				class="btn-link btn-full resend-button semibold"
				type="submit"
				value="Resend Code"
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
