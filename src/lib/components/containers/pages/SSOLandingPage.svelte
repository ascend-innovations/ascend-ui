<script>
	import { CardGrid, SSOCard, FooterBar, AscendLoginBackground } from '$lib/index.js'

	export let data
</script>

<div class="sso-landing-page">
	<div
		class="sso-hero-image neutral-shadow-l"
		style={`background: center/cover url(${AscendLoginBackground})`}
	>
		<h1 class="headline-l-xxl">Ascend Suite</h1>
		<p class="body-l">Access your Ascend apps & dashboards, all in one place.</p>
	</div>
	<div class="sso-sections-container">
		{#if !data.has_apps}
			<!-- My have no content. -->
		{:else}
			{#if data.dashboards?.length}
				<div class="sso-section">
					<h2 class="headline-l-l sso-landing-headline">Your Dashboards</h2>
					<CardGrid>
						{#each data.dashboards as dashboard (dashboard.name)}
							<SSOCard data={dashboard} />
						{/each}
					</CardGrid>
				</div>
			{/if}
			{#if data.apps?.length}
				<div class="sso-section">
					<h2 class="headline-l-l sso-landing-headline">Your Apps</h2>
					<CardGrid>
						{#each data.apps as app (app.name)}
							<SSOCard data={app} />
						{/each}
					</CardGrid>
				</div>
			{/if}
			{#if data.admin}
				<div class="sso-section">
					<h2 class="headline-l-l sso-landing-headline">Accounts & Permissions</h2>
					<CardGrid>
						<SSOCard data={data.admin} />
					</CardGrid>
				</div>
			{/if}
		{/if}
	</div>
</div>

<footer class="sso-landing-footer">
	<div class="sso-landing-footer-bar body-xs">
		<div class="company-signature">
			Powered by <strong
				><a
					href="https://ascend-innovations.com/"
					target="_blank">Ascend Innovations</a
				></strong
			>
		</div>
		<div class="sso-landing-footer-link-buttons">
			<a
				href="https://ascend-innovations.com/legal/terms-and-conditions"
				target="_blank">Terms & Conditions</a
			>
			<a
				href="https://ascend-innovations.com/legal/privacy-policy"
				target="_blank">Privacy Policy</a
			>
		</div>
	</div>
</footer>
