<script>
	export let dialogCallback
</script>

<div class="login-card">
	<div class="headline-l-xxl">Login</div>
	<slot />
	{#if dialogCallback}
		<div class="account-change-card-slot">
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p
				on:click={dialogCallback}
				on:keypress={dialogCallback}
				class="account-profile-card-link"
			>
				Create Account or Change Profile Info
			</p>
		</div>
	{/if}
</div>
