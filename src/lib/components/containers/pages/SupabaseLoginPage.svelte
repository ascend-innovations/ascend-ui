<script>
	import { browser } from '$app/environment'
	import { InputError, isValidEmail, validateSupabasePassword, AscendLoginBackground, AscendLogoWithText } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let form, dialogCallback

	let emailValidationMessage, validEmail, validPassword, emailInput, passwordInput, password, email

	function emailValidation() {
		validEmail = isValidEmail(email)

		if (!email) {
			emailValidationMessage = 'Please enter your email'
		} else {
			if (!validEmail) {
				emailValidationMessage = 'Invalid email'
			}
		}

		return validEmail
	}

	function passwordValidation() {
		if (!password) {
			validPassword = validateSupabasePassword(password)
			return validPassword
		}

		validPassword = true
	}

	onMount(() => {
		if (browser) {
			emailInput = document.getElementById('email')
			passwordInput = document.getElementById('password')

			emailInput.addEventListener('blur', emailValidation)
			passwordInput.addEventListener('blur', passwordValidation)
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
		<div class="form-text">
			<label
				for="email"
				class="body-m-semibold"
			>
				Email
			</label>
			<input
				autocomplete="email"
				value={email}
				class="form-text__input {validEmail === false ? 'form-text__input--error' : ''}"
				id="email"
				name="email"
				placeholder="Enter your email"
				type="text"
			/>
		</div>
		<div class="form-text">
			<label
				for="password"
				class="body-m-semibold"
			>
				Password
			</label>
			<input
				value={password}
				class="form-text__input {validPassword === false ? 'form-text__input--error' : ''}"
				id="password"
				name="password"
				placeholder="Enter your password"
				type="password"
			/>
		</div>
		<form
			class="sso-login__form"
			method="post"
			name="login"
			action="?/login"
		>
			<div class="sso-login__button">
				<input
					class="btn-full btn-l btn-primary btn-rect semibold sso-login__submit"
					type="submit"
					value="Login"
				/>
			</div>
			<div class="sso-login__miscellaneous-links">
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
		<!-- <div class="width-100">
			<p
				on:click={dialogCallback}
				on:keypress={dialogCallback}
				class="login-card__account-link"
			>
				Create Account or Change Profile Info
			</p>
		</div> -->
	</div>
</div>

		{#if form?.message}
			<InputError text={form.message} />
		{/if}
