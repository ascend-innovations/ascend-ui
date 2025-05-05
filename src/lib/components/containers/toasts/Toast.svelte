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
	class="toast"
	transition:fade
>
	<div class="toast__body">
		<div class="toast__icon">
			{#if toast.purpose === 'success'}
				<SuccessCheckCircleSmallIcon />
			{:else if toast.purpose === 'error'}
				<AlertCircleSmallIcon />
			{:else if toast.purpose === 'copy'}
				<Copy01SmallIcon colorOverride="var(--neutral-400)" />
			{/if}
		</div>
		<div class="toast__text">
			<div class="headline-l-xs">{toast.title}</div>
			<div class="toast__text-body">
				<p>{toast.body}</p>
			</div>
		</div>
		{#if toast.category === 'action'}
			<div class="toast__close">
				<CloseToastButton callback={() => closeToast(toast.id)} />
			</div>
		{/if}
	</div>
	{#if toast.action}
		<div class="toast__actions" />
	{/if}
</div>
