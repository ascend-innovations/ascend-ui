<script>
	export let title,
		favicon,
		image,
		url,
		description = ''
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		property="og:title"
		content={title}
	/>
	<link
		rel="icon"
		type="image/x-icon"
		href={favicon}
	/>
	<link
		rel="canonical"
		href={url}
	/>
	<meta
		property="og:url"
		content={url}
	/>
	<meta
		property="og:description"
		content={description}
	/>
	<meta
		name="image"
		content={image}
	/>
	<meta
		property="og:image"
		content={image}
	/>
	<meta
		property="og:image:secure_url"
		content={image}
	/>
	<meta
		property="og:image:secure_url"
		content={image}
	/>
	<meta
		property="og:type"
		content="website"
	/>
</svelte:head>
