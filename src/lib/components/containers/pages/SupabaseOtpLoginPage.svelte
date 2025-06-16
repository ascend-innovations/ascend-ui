<script>
	import { browser } from '$app/environment'
	import { InputError, validateSupabaseOtp, AscendLoginBackground, AscendLogoWithText } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'

	export let form

	let otp = '', validOtp, errorSlot, resendErrorSlot

	const dispatch = createEventDispatcher()

	function otpValidation() {
		validOtp = validateSupabaseOtp(otp)

		if (!otp) {
			new InputError({
				target: errorSlot,
				props: { text: 'Please enter your One-Time Passcode' }
			})
		} else {
			if (!validOtp) {
				new InputError({
					target: errorSlot,
					props: { text: 'Invalid passcode. Please try again' }
				})
			}
		}

		return validOtp
	}

	onMount(() => {
		if (browser) {
			errorSlot = document.querySelector('.sso-login__error')
			resendErrorSlot = document.querySelector('.sso-login__resend-error')

			if (form?.message) {
				errorSlot.style.display = 'block'

				new InputError({
					target: errorSlot,
					props: { text: form?.message }
				})
			} else {
				errorSlot.style.display = 'none'
			}
		}

		if (form?.otp_resend_message) {
			dispatch('otpResent', form)

			resendErrorSlot.style.display = 'block'
			new InputError({
				target: resendErrorSlot,
				props: { text: form?.otp_resend_message }
			})
		}
	})
</script>


<div
	class="login-page"
	style={`background-image: url(${AscendLoginBackground})`}
>
	<div class="login-card">
		<div class="login-card__ascend-icon width-100">
			<img
				src={AscendLogoWithText}
				alt="ascend-logo"
			/>
		</div>
		<div class="login-card__header width-100 text-align-center">Login</div>
		<div class="sso-otp__form-container">
			<form
				class="sso-otp__form"
				method="POST"
				action="?/verifyOtp"
			>
				<p class="neutral-400-text text-align-center">Enter the one-time passcode sent to your email to continue.</p>
				<div class="form-text">
					<label
						for="otp"
						class="body-m-semibold"
					>
						One-Time Passcode
					</label>
					<input
						value={otp}
						class="form-text__input {validOtp === false ? 'form-text__input--error' : ''}"
						id="otp"
						name="otp"
						placeholder="Enter your one-time passcode"
						type="password"
					/>
				</div>

				<div class="sso-login__error" style="display:none;"></div>

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
				<div class="sso-login__resend-error"></div>

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
	</div>
</div>
