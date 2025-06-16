<script>
	import { browser } from '$app/environment'
	import { CardGrid, SSOCard, AscendLoginBackground } from '$lib/index.js'
	import { onMount } from 'svelte'

	export let data

	onMount(() => {
		if (browser) {
			let ssoLandingSections = document.querySelector('.sso-landing__sections')
			
			if (data.has_apps) {
				if (data.dashboards?.length) {
					let section = document.createElement('div')
					section.className = 'sso-landing__section'

					section.innerHTML = `
						<h2 class="headline-l-l sso-landing__headline">Your Dashboards</h2>
						<div class="card-grid">
							${data.dashboards.map((dashboard) => `
								<a
									href="${dashboard.link}"
									target="_blank"
									class="sso-card--link"
								>
									<div
										class="sso-card neutral-shadow-s"
										style={styles?.join(';')}
									>
										<div class="sso-card__icon">
											<img
												src="${dashboard.icon}"
												alt="sso-app-icon"
											/>
										</div>
										<div class="sso-card__body">
											<h4 class="headline-l-m">${dashboard.name}</h4>
											<p class="body-m neutral-400-text">${dashboard.description}</p>
											<div class="sso-card__tag tag neutral-subtle">${dashboard.role}</div>
										</div>
									</div>
								</a>
							`).join('')}
						</div>
					`

					ssoLandingSections.appendChild(section)
				}

				if (data.apps?.length) {
					let section = document.createElement('div')
					section.className = 'sso-landing__section'

					section.innerHTML = `
						<h2 class="headline-l-l sso-landing__headline">Your Apps</h2>
						<div class="card-grid">
							${data.apps.map((app) => `
								<a
									href="${app.link}"
									target="_blank"
									class="sso-card--link"
								>
									<div
										class="sso-card neutral-shadow-s"
										style={styles?.join(';')}
									>
										<div class="sso-card__icon">
											<img
												src="${app.icon}"
												alt="sso-app-icon"
											/>
										</div>
										<div class="sso-card__body">
											<h4 class="headline-l-m">${app.name}</h4>
											<p class="body-m neutral-400-text">${app.description}</p>
											<div class="sso-card__tag tag neutral-subtle">${app.role}</div>
										</div>
									</div>
								</a>
							`).join('')}
						</div>
					`

					ssoLandingSections.appendChild(section)
				}

				if (data.admin) {
					let section = document.createElement('div')
					section.className = 'sso-landing__section'

					section.innerHTML = `
						<h2 class="headline-l-l sso-landing__headline">Accounts & Permissions</h2>
						<div class="card-grid">
							<a
								href="${data.admin.link}"
								target="_blank"
								class="sso-card--link"
							>
								<div
									class="sso-card neutral-shadow-s"
									style={styles?.join(';')}
								>
									<div class="sso-card__icon">
										<img
											src="${data.admin.icon}"
											alt="sso-app-icon"
										/>
									</div>
									<div class="sso-card__body">
										<h4 class="headline-l-m">${data.admin.name}</h4>
										<p class="body-m neutral-400-text">${data.admin.description}</p>
										${data.admin.role ? `<div class="sso-card__tag tag neutral-subtle">${data.admin.role}</div>` : ''}
									</div>
								</div>
							</a>
						</div>
					`

					ssoLandingSections.appendChild(section)
				}
			}
		}
	})
</script>

<div class="sso-landing">
	<div
		class="sso-landing__hero neutral-shadow-l"
		style={`background: center/cover url(${AscendLoginBackground})`}
	>
		<h1 class="headline-l-xxl">Ascend Suite</h1>
		<p class="body-l">Access your Ascend apps & dashboards, all in one place.</p>
	</div>
	<div class="sso-landing__sections">
		<!-- Cards go here for dashboards, apps, and admin! -->
	</div>
</div>

<footer class="sso-landing__footer body-xs">
	<div class="company-signature">
		Powered by <strong
			><a
				href="https://ascend-innovations.com/"
				target="_blank">Ascend Innovations</a
			></strong
		>
	</div>
	<div class="sso-landing__footer-links">
		<a
			href="https://ascend-innovations.com/legal/terms-and-conditions"
			target="_blank">Terms & Conditions</a
		>
		<a
			href="https://ascend-innovations.com/legal/privacy-policy"
			target="_blank">Privacy Policy</a
		>
	</div>
</footer>
