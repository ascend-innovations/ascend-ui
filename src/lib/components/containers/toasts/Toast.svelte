<script>
	import { AlertCircleSmallIcon, CloseToastButton, SuccessCheckCircleSmallIcon, Copy01SmallIcon } from '$lib/index.js'
	import { createEventDispatcher, onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	export let toast, delay

	const dispatch = createEventDispatcher()

	function closeToast(id) {
		dispatch('timer', { id })
	}

	onMount(() => {
		if (toast.category === 'dismiss') {
			setTimeout(() => closeToast(toast.id), delay)
		}
	})
</script>

<div
	class="toast-container"
	transition:fade
>
	<div class="toast-body">
		<div class="icon-column">
			{#if toast.purpose === 'success'}
				<SuccessCheckCircleSmallIcon />
			{:else if toast.purpose === 'error'}
				<AlertCircleSmallIcon />
			{:else if toast.purpose === 'copy'}
				<Copy01SmallIcon colorOverride="var(--neutral-400)" />
			{/if}
		</div>
		<div class="text-column">
			<div class="text-title headline-l-xs">{toast.title}</div>
			<div class="text-body">
				<p>{toast.body}</p>
			</div>
		</div>
		{#if toast.category === 'action'}
			<div class="close-column">
				<CloseToastButton callback={() => closeToast(toast.id)} />
			</div>
		{/if}
	</div>
	{#if toast.action}
		<div class="toast-actions" />
	{/if}
</div>

<style>
	.toast-container {
		color: white;
		background-color: var(--neutral-800);
		border-radius: var(--spacing09);
		box-shadow:
			0px var(--spacing04) var(--spacing10) var(--neutral-trans-050),
			0px var(--spacing02) var(--spacing03) var(--spacing02) var(--neutral-trans-100);
		gap: var(--spacing11);
		padding: var(--spacing09);
		width: var(--spacing25);
	}
	.toast-body,
	.toast-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.icon-column {
		align-items: center;
		display: flex;
		width: var(--spacing13);
	}
	.text-column {
		width: var(--spacing22);
	}
	.text-body {
		color: var(--neutral-300);
		font-size: 13px;
		margin-top: 4px;
	}
	.close-column {
		color: white;
	}
</style>
