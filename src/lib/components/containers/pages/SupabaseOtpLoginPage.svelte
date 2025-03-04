<script>
	import { FormTextInput, LoginPage, InputError, validateSupabaseOtp } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'

	export let form

	let otp, validOtp

	const dispatch = createEventDispatcher()

	function otpValidation() {
	    validOtp = validateSupabaseOtp(otp)
		return validOtp
	}

    onMount(() => {
        if (form?.otp_resend_message) {
            dispatch('otpResent', form)
        }
	})
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
			validValue={validOtp}
			validationCallback={otpValidation}
		/>

		{#if form?.message}
			<InputError text={form.message} />
		{/if}

		<div class="login-button-row">
			<input
				class="btn-full btn-l btn-primary btn-rect semibold  ${disabled ? 'btn-disabled' : ''}"
				type="submit"
				value="Verify"
			/>
		</div>
	</form>
	<form
		method="POST"
		action="?/resendOtp"
	>
		{#if form?.resend_message}
			<InputError text={form.resend_message} />
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
