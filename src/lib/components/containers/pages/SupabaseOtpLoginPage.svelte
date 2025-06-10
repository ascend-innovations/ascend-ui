<script>
	import { FormTextInput, LoginPage, InputError, validateSupabaseOtp } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'

	export let form

	let otp, validOtp, otpValidationMessage

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
		if (form?.otp_resend_message) {
			dispatch('otpResent', form)
		}
	})
</script>

<LoginPage
	loginHeader="Enter Passcode"
	ascendLogo
>
	<div class="sso-otp__form-container">
		<form
			class="sso-otp__form"
			method="POST"
			action="?/verifyOtp"
		>
			<p class="neutral-400-text text-align-center">Enter the one-time passcode sent to your email to continue.</p>
			<FormTextInput
				name="otp"
				bind:value={otp}
				label="One-Time Passcode"
				validValue={validOtp}
				validationCallback={otpValidation}
				validationMessage={otpValidationMessage}
			/>
			<input
				value={password}
				class="form-text__input {validPassword === false ? 'form-text__input--error' : ''}"
				id="password"
				name="password"
				placeholder="Enter your password"
				type="password"
			/>

			{#if form?.message}
				<InputError text={form.message} />
			{/if}

			<div class="sso-otp__button">
				<input
					class="btn-full btn-l btn-primary btn-rect semibold sso-otp__submit"
					type="submit"
					value="Verify"
				/>
			</div>
		</form>
		<form
			class="sso-otp__resend-form"
			method="POST"
			action="?/resendOtp"
		>
			{#if form?.resend_message}
				<InputError text={form.resend_message} />
			{/if}

			<div class="sso-otp__button sso-otp__resend-section">
				<p class="body-xs">Didn't get an email?</p>
				<input
					class="btn-link semibold body-xs neutral-400-text"
					type="submit"
					value="Resend Code"
				/>
			</div>
			<div class="sso-otp__miscellaneous-links">
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
