<script>
	import { onMount } from 'svelte'
	import { GenericAuthPage, Label, InputError, FormTextInput, validateSupabasePassword } from '$lib/index.js'

	export let form

	let password,
		confirmPassword,
		validConfirmPassword,
		passwordConfirmValidationMessage,
		passwordValidationMessage,
		validPassword,
		sessionData,
		code,
		email
	let accessToken = form?.accessToken ? form.accessToken : ''
	let refreshToken = form?.refreshToken ? form.refreshToken : ''
	let userId = form?.userId ? form.userId : ''

	onMount(async () => {
		const searchParams = new URLSearchParams(window.location.search)
		sessionData = searchParams.get('data') ? searchParams.get('data') : ''
		code = searchParams.get('code') ? searchParams.get('code') : ''
		email = searchParams.get('email') ? searchParams.get('email') : ''
	})

	function passwordValidation() {
		validPassword = validateSupabasePassword(password)

		if (!password) {
			passwordValidationMessage = 'Please enter new password'
		} else {
			if (confirmPassword && password !== confirmPassword) {
				validPassword = false
				passwordValidationMessage = 'Passwords must match'
			} else if (!validPassword) {
				passwordValidationMessage = 'Please review requirements below and try again'
			}
		}

		return validPassword
	}

	function confirmPasswordValidation() {
		validConfirmPassword = validateSupabasePassword(confirmPassword)

		if (!confirmPassword) {
			passwordConfirmValidationMessage = 'Please confirm new password'
		} else {
			if (password && password !== confirmPassword) {
				validConfirmPassword = false
				passwordConfirmValidationMessage = 'Passwords must match'
			} else if (!validConfirmPassword) {
				passwordConfirmValidationMessage = 'Please review requirements below and try again'
			}
		}

		return validConfirmPassword
	}
</script>

<GenericAuthPage>
	<form
		method="post"
		name="reset"
		action="?/reset"
	>
		<FormTextInput
			label="New Password"
			placeholder="Enter New Password"
			name="password"
			type="text"
			bind:value={password}
			validValue={validPassword}
			validationCallback={passwordValidation}
			validationMessage={passwordValidationMessage}
		/>

		<FormTextInput
			label="Re-Enter New Password"
			placeholder="Re-Enter New Password"
			name="confirmPassword"
			type="text"
			bind:value={confirmPassword}
			validValue={validConfirmPassword}
			validationCallback={confirmPasswordValidation}
			validationMessage={passwordConfirmValidationMessage}
		/>

		{#if form?.message}
			<InputError text={form.message} />
		{/if}

		<div class="password-reqs">
			<div class="password-reqs-title">
				<Label
					id="password-reqs"
					label="Password must have:"
				></Label>
			</div>
			<div class="password-reqs-list body-xs">
				<ul>
					<li>At least eight characters</li>
					<li>At least one uppercase letter</li>
					<li>At least one lowercase letter</li>
					<li>At least one number</li>
					<li>At least one special character</li>
				</ul>
			</div>
		</div>
		<div class="hidden">
			<FormTextInput
				label="data"
				name="data"
				value={sessionData}
			/>
			<FormTextInput
				label="email"
				name="email"
				value={email}
			/>
			<FormTextInput
				label="token"
				name="access_token"
				value={accessToken}
			/>
			<FormTextInput
				label="token2"
				name="refresh_token"
				value={refreshToken}
			/>
			<FormTextInput
				label="userId"
				name="user_id"
				value={userId}
			/>
			<FormTextInput
				label="code"
				name="code"
				value={code}
			/>
		</div>
		<div class="login-button-row">
			<input
				class={`btn-full btn-l btn-primary btn-rect	semibold`}
				type="submit"
				value="Create"
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
</GenericAuthPage>

<style>
	.hidden {
		display: none;
	}
	.login-button-row {
		width: 100%;
	}
	.password-reqs-title {
		padding-bottom: 10px;
	}
	.password-reqs {
		margin-left: 10px;
	}
	.password-reqs-list {
		margin-left: 30px;
		color: var(--neutral-400);
	}
	form {
		align-items: flex-start;
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
	.miscellaneous-links {
		margin: auto;
		color: var(--neutral-400);
		display: flex;
		gap: var(--spacing06);

		& a {
			color: inherit;
		}
	}
</style>
