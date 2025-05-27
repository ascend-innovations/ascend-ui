<script>
	import {
		CommunityIcon,
		CrisisIcon,
		RecoveryIcon,
		AdministratorsIcon,
		GroupsIcon,
		MetricsIcon,
		NewNotificationIcon,
		NotificationsIcon,
		Page,
		ProfileIcon,
		SubscribersIcon,
		TemplatesIcon,
	} from '$lib/index.js'
</script>

<Page>
	<h1>Icons</h1>
	<div class="icon-sample">
		<h2>Administrator</h2>
		<div class="sample-container">
			<AdministratorsIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>CommunityIcon</h2>
		<div class="sample-container">
			<CommunityIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>CrisisIcon</h2>
		<div class="sample-container">
			<CrisisIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>RecoveryIcon</h2>
		<div class="sample-container">
			<RecoveryIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>Groups</h2>
		<div class="sample-container">
			<GroupsIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>Metrics</h2>
		<div class="sample-container">
			<MetricsIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>New Notification</h2>
		<div class="sample-container">
			<NewNotificationIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>Notifications</h2>
		<div class="sample-container">
			<NotificationsIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>Profile</h2>
		<div class="sample-container">
			<ProfileIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>Subscribers</h2>
		<div class="sample-container">
			<SubscribersIcon />
		</div>
	</div>
	<div class="icon-sample">
		<h2>Templates</h2>
		<div class="sample-container">
			<TemplatesIcon />
		</div>
	</div>
</Page>

<style>
	.icon-sample {
		margin: 30px;
	}
	.sample-container {
		align-items: center;
		background-color: lightgray;
		display: flex;
		height: 60px;
		justify-content: center;
		margin: 30px;
		width: 60px;
	}
</style>
