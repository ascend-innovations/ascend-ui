<script>
	import { onMount } from 'svelte'
	import { GenericAuthPage, StandardButton, FormTextInput, MailIcon } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'

	export let form, 
		loginLink = "/login"

	let email = form?.email ? form.email : ''

	const dispatch = createEventDispatcher()

	onMount(async () => {
		const searchParams = new URLSearchParams(window.location.search)
		email = searchParams.get('email') ? searchParams.get('email') : email

		if (form?.reset_link_sent) {
			dispatch('resetLinkSent', form)
		}
	})
</script>

<GenericAuthPage cardHeadline="Reset Password">
	<form
		method="post"
		name="reset"
		action="?/reset"
	>
		<div class="card-text">
			<p>Enter your email address to receive a link to reset your password.</p>
		</div>
		<FormTextInput
			label="email"
			name="email"
			value={email}
		/>
		<div class="login-button-row">
			<StandardButton
				classes={[`btn-full`, `btn-l`, `btn-primary`, `btn-rect`, `semibold`]}
				type="submit"
				text="Send Email"
				leftIcon={MailIcon}
			/>
		</div>
		<div class="miscellaneous-links">
			<a
				class="body-xs"
				href={loginLink}><b>Login</b></a
			>
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
	.card-text {
		color: var(--neutral-400);
		text-align: center;
		width: 100%;
	}
</style>
