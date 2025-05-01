<script>
	export let store

	let dialog

	$: if (store.dialog.open === false) dialog.close()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="dialog-container"
	on:click={() => (store.dialog.open = false)}
>
	<dialog
		bind:this={dialog}
		on:click|stopPropagation
	>
		{#if $$slots.header}
			<div class="dialog-header">
				<slot name="header" />
			</div>
		{/if}
		{#if $$slots.body}
			<div class="dialog-body">
				<slot name="body" />
			</div>
		{/if}
		{#if $$slots.footer}
			<div class="dialog-footer">
				<slot name="footer" />
			</div>
		{/if}
	</dialog>
</div>
