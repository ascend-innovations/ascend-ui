<script>
	import { InputError, validateCredentials, isValidEmail, validateSupabasePassword, Button, FormTextInput, LoginPage } from '$lib/index.js'

	export let form, dialogCallback

	let emailValidationMessage, validEmail, validPassword, password, email

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
</script>

<LoginPage ascendLogo>
	<form
		class="sso-login-form"
		method="post"
		name="login"
		action="?/login"
	>
		<FormTextInput
			label="email"
			type="email"
			bind:value={email}
			validValue={validEmail}
			validationCallback={emailValidation}
			validationMessage={emailValidationMessage}
		/>
		<FormTextInput
			label="password"
			type="password"
			bind:value={password}
			validValue={validPassword}
			validationCallback={passwordValidation}
		/>

		{#if form?.message}
			<InputError text={form.message} />
		{/if}

		<div class="sso-login-button-row">
			<input
				class="btn-full btn-l btn-primary btn-rect semibold sso-login-submit"
				type="submit"
				value="Login"
			/>
		</div>
		<div class="sso-login-miscellaneous-links">
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
	<!-- <div class="sso-login-account-info">
		<Button
			callback={dialogCallback}
			classes={['btn-link']}
			text="Create Account or Change Profile Info"
		/>
	</div> -->
</LoginPage>
