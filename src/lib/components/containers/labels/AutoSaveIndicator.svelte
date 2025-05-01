<script>
	import { RefreshCCW05SmallIcon } from '$lib'
	import CheckCircleSmallIcon from '$lib/assets/icons/s/CheckCircleSmallIcon.svelte'

	export let saving = true,
		visible = true
</script>

{#if visible}
	<div class="autosave-indicator">
		<svelte:component this={saving === true ? RefreshCCW05SmallIcon : CheckCircleSmallIcon} />
		<p class="body-s semibold">{saving === true ? 'Saving...' : 'Progress Saved'}</p>
	</div>
{/if}
