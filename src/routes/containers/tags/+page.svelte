<script>
	import { ArrowDownExtraSmallIcon, RoleTag, Tag } from '$lib/index.js'

	const typeList = ['Success', 'Secondary', 'Error', 'Warning', 'Neutral']
</script>

<h1>Tags</h1>
{#each typeList as prominentType}
	<h2>{prominentType} Tag</h2>
	<Tag
		content={`${prominentType} Prominent`}
		type={`${prominentType.toLocaleLowerCase()}-prominent`}
		icon={ArrowDownExtraSmallIcon}
		side="left"
	/>
{/each}
{#each typeList as subtleType}
	<h2>{subtleType} Tag</h2>
	<Tag
		content={`${subtleType} Subtle`}
		type={`${subtleType.toLocaleLowerCase()}-subtle`}
		icon={ArrowDownExtraSmallIcon}
		side="right"
	/>
{/each}
<RoleTag role="admin" />
