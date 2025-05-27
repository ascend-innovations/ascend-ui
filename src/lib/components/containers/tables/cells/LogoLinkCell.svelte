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
			row[column.linkKey] =
				`${row[column.linkKey]?.slice(0, 3)}-${row[column.linkKey]?.slice(3, 6)}-${row[column.linkKey]?.slice(6)}`
		}
	}
</script>

<div
	class="logo-link-cell"
	style={column?.styles?.join(';')}
>
	{#if row[column.logoKey]}
		<div class="logo">
			<img
				src={row[column.logoKey]}
				alt="logo"
			/>
		</div>
	{/if}
	<div class="text-container {row[column.linkKey] ? 'link-height' : ''}">
		<p>{row[column.key]}</p>
		{#if row[column.linkKey]}
			<p class="link">
				<a
					href={`${prefix}${prefix === 'tel:' ? phone : row[column.linkKey]}`}
					target="_blank">{row[column.linkKey]}</a
				>
			</p>
		{/if}
	</div>
</div>

<style>
	.logo-link-cell {
		display: flex;
		gap: var(--spacing06);
		align-items: center;
	}
	.logo {
		padding: var(--spacing02);
		border: 1px solid var(--neutral-100);
		border-radius: var(--spacing02);
		min-width: 48px;
		width: 48px;
		height: 48px;

		& img {
			display: inline-block;
			width: 100%;
			height: auto;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.text-container {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 24px;

		& p {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: bold;
		}

		& a {
			color: var(--neutral-400);
		}
	}
	.link {
		font-size: 11px;
		height: 19px;
	}
	.link-height {
		height: 43px;
	}
</style>
