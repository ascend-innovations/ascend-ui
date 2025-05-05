<script>
	import { Toast } from '$lib/index.js'
	import { fade } from 'svelte/transition'

	export let toastList = undefined,
		delay = 3000

	function removeToast(event) {
		toastList = toastList.filter((toast) => toast.id !== event.detail.id)
	}
</script>

{#if toastList?.length > 0}
	<div class="toast-area">
		<div
			class="toast-area__list"
			transition:fade
		>
			{#each toastList as toast}
				<Toast
					{delay}
					{toast}
					on:timer={(event) => removeToast(event)}
				/>
			{/each}
		</div>
	</div>
{/if}
