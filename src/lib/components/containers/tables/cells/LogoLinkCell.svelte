<script>
	export let column, row
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
		<p>{row[column.textKey]}</p>
		{#if row[column.linkKey]}
			<p class="link"><a href={row[column.linkKey]}>{row[column.linkKey]}</a></p>
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
		width: 48px;
		height: 48px;

		& img {
			display: inline-block;
			width: 100%;
			height: 100%;
		}
	}
	.text-container {
		height: 24px;

		& p {
			font-weight: bold;
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
