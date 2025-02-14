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

<style>
	.dialog-container {
		align-items: center;
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		height: 100%;
		justify-content: center;
		position: fixed;
		width: 100%;
		z-index: 420;
	}
	dialog {
		border-radius: var(--spacing10);
		border: none;
		box-shadow:
			0px var(--spacing04) var(--spacing10) var(--neutral-trans-050),
			0px var(--spacing02) var(--spacing03) var(--spacing02) var(--neutral-trans-100);
		display: block;
		margin: var(--spacing09);
		width: calc(100vw - var(--spacing12));
		max-height: calc(100dvh - var(--spacing12));
		overflow: hidden;
	}
	dialog:modal {
		background-color: var(--background-base);
		flex-direction: column;
		max-height: 80vh;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
		backdrop-filter: blur(10px);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media screen and (min-width: 768px) {
		dialog {
			border-radius: var(--border-radius-xl);
			width: var(--spacing30);
			margin: auto;
		}
	}
</style>
