<script>
	import { Page, PageBody, SSOLandingPage, SupabaseLoginPage, SupabaseOtpLoginPage } from '$lib/index.js'

	let data = {
		has_apps: true,
		dashboards: [
			{
				icon: 'https://ascnd.s3.us-east-2.amazonaws.com/app-icons/pop-dash-icon.svg',
				name: 'Population Dashboard',
				description:
					'View data and visualizations related to your community. Browse and filter to identify subsets of the population.',
				role: 'Admin',
				link: '/',
			},
			{
				icon: 'https://ascnd.s3.us-east-2.amazonaws.com/app-icons/ffdashboard-icon.svg',
				name: 'Familiar Faces Dashboard',
				description:
					'Identify individuals who frequently utilize support systems in your community and help them find the care they need.',
				role: 'Admin',
				link: '/',
			},
		],
		apps: [
			{
				icon: 'https://ascnd.s3.us-east-2.amazonaws.com/app-icons/ascend-notify-icon.svg',
				name: 'Ascend Notify',
				description:
					'Send text message notifications to individuals signed up for different categories of alerts and manage subscribers to the system.',
				role: 'Editor',
				link: '/',
			},
			{
				icon: 'https://ascnd.s3.us-east-2.amazonaws.com/app-icons/localhelpnow-icon.svg',
				name: 'LocalHelpNow',
				description:
					'Review, update, and add providers to the LocalHelpNow directory, and see feedback from both providers and individuals in the community.',
				role: 'Editor',
				link: '/',
			},
		],
		admin: {
			icon: 'https://ascnd.s3.us-east-2.amazonaws.com/app-icons/account-manage-ement-icon.svg',
			name: 'Account Management',
			description: 'Manage your account and set up new user accounts for your organization.',
			link: '/',
			user_role: 'Super Admin',
		},
	}
</script>

<Page>
	<!-- <SSOLandingPage {data} /> -->
	<SupabaseLoginPage />
	<SupabaseOtpLoginPage />
</Page>
