<script>
	import { FormTextInput, LoginPage, InputError, validateSupabaseOtp } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'

	export let form

	let otp, validOtp, otpValidationMessage
	let origin = form?.origin ? form.origin : ''

	const dispatch = createEventDispatcher()

	function otpValidation() {
		validOtp = validateSupabaseOtp(otp)

		if (!otp) {
			otpValidationMessage = 'Please enter your One-Time Passcode'
		} else {
			if (!validOtp) {
				otpValidationMessage = 'Invalid passcode. Please try again'
			}
		}

		return validOtp
	}

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search)
		origin = searchParams.get('origin') ? searchParams.get('origin') : ''

		if (form?.otp_resend_message) {
			dispatch('otpResent', form)
		}
	})
</script>

<LoginPage
	loginHeader="Enter Passcode"
	ascendLogo
>
	<div class="form-container">
		<form
			method="POST"
			action="?/verifyOtp"
		>
			<p class="email-instructions">Enter the one-time passcode sent to your email to continue.</p>
			<FormTextInput
				name="otp"
				bind:value={otp}
				label="One-Time Passcode"
				placeholder="Enter Passcode"
				type="password"
				validValue={validOtp}
				validationCallback={otpValidation}
				validationMessage={otpValidationMessage}
			/>

			{#if form?.message}
				<InputError text={form.message} />
			{/if}

			<div class="hidden">
				<FormTextInput
					label="origin"
					name="origin"
					value={origin}
				/>
			</div>

			<div class="login-button-row">
				<input
					class="btn-full btn-l btn-primary btn-rect semibold"
					type="submit"
					value="Verify"
				/>
			</div>
		</form>
		<form
			class="resend-form"
			method="POST"
			action="?/resendOtp"
		>
			{#if form?.resend_message}
				<InputError text={form.resend_message} />
			{/if}

			<div class="hidden">
				<FormTextInput
					label="origin"
					name="origin"
					value={origin}
				/>
			</div>

			<div class="login-button-row resend-section">
				<p class="body-xs">Didn't get an email?</p>
				<input
					class="btn-link resend-button semibold neutral-color"
					type="submit"
					value="Resend Code"
				/>
			</div>
			<div class="miscellaneous-links">
				<a
					class="body-xs"
					target="_blank"
					href="https://ascend-innovations.com/legal/terms-and-conditions"><b>Terms & Conditions</b></a
				>
				<a
					class="body-xs"
					target="_blank"
					href="https://ascend-innovations.com/legal/privacy-policy"><b>Privacy Policy</b></a
				>
			</div>
		</form>
	</div>
</LoginPage>

<style>
	.hidden {
		display: none;
	}
	.login-button-row {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing03);
		color: var(--neutral-400);
	}
	.neutral-color {
		color: var(--neutral-400);
		font-size: 13px;
	}
	.email-instructions {
		color: var(--neutral-400);
		text-align: center;
	}
	.miscellaneous-links {
		color: var(--neutral-400);
		display: flex;
		gap: var(--spacing06);

		& a {
			color: inherit;
		}
	}
	.form-container {
		width: 100%;
	}
	.resend-form {
		margin-top: var(--spacing09);
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
	}
</style>
