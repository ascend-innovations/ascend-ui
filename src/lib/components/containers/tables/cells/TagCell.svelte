<script>
	import { ErrorTag, RoleTag, StatusTag } from '$lib/index.js'

	export let row
</script>

{#if row?.status === 'Error'}
	<ErrorTag errors={row?.errors} />
{:else if row?.role?.length}
	<RoleTag role={row?.role} />
{:else}
	<StatusTag status={row?.status} />
{/if}
