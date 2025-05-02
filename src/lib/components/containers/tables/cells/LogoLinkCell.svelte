<script>
	export let column, row

	let prefix, phone
	if (row[column.linkKey]?.includes('@')) {
		prefix = 'mailto:'
	} else if (row[column.linkKey]?.includes('.')) {
		prefix = 'https://'
	} else if (row[column.linkKey]?.includes('-')) {
		prefix = 'tel:'
		const removeHypens = row[column.linkKey].split('-')
		phone = removeHypens.join('')
	} else {
		if (row[column.linkKey] === '') {
			phone = ''
		} else {
			prefix = 'tel:'
			phone = row[column.linkKey]
			row[column.linkKey] = `${row[column.linkKey]?.slice(0, 3)}-${row[column.linkKey]?.slice(3, 6)}-${row[column.linkKey]?.slice(6)}`
		}
	}
</script>

<div
	class="logo-link-cell"
	style={column?.styles?.join(';')}
>
	{#if row[column.logoKey]}
		<div class="logo-link-logo">
			<img
				src={row[column.logoKey]}
				alt="logo"
			/>
		</div>
	{/if}
	<div class="logo-link-text-container truncate-text {row[column.linkKey] ? 'logo-link-link-height' : ''}">
		<p class="truncate-text">{row[column.textKey]}</p>
		{#if row[column.linkKey]}
			<p class="logo-link-link truncate-text body-xxs">
				<a
					class="neutral-400-text"
					href={`${prefix}${prefix === 'tel:' ? phone : row[column.linkKey]}`}
					target="_blank">{row[column.linkKey]}</a
				>
			</p>
		{/if}
	</div>
</div>
