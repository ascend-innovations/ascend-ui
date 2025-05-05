<script>
	import { Tag } from '$lib/index.js'
	export let data, styles
</script>

<a
	href={data.link}
	target="_blank"
	class="sso-card--link"
>
	<div
		class="sso-card neutral-shadow-s"
		style={styles?.join(';')}
	>
		<div class="sso-card__icon">
			<img
				src={data.icon}
				alt="sso-app-icon"
			/>
		</div>
		<div class="sso-card__body">
			<h4 class="headline-l-m">{data.name}</h4>
			<p class="body-m neutral-400-text">{data.description}</p>
			<Tag
				content={data.role}
				type="neutral-subtle"
			/>
		</div>
	</div>
</a>
