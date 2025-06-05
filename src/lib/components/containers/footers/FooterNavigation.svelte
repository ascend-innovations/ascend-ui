<script>
	import { Button, BackButton, CancelButton, NextButton } from '$lib/index.js'

	export let content
</script>

<div class="footer">
	<div class="left-side">
		{#if content?.left?.back}
			<BackButton />
		{/if}
		{#if content?.left?.message}
			<div class="left-message">
				{content.left.message}
			</div>
		{/if}
	</div>
	<div class="right-side">
		{#if content?.right?.cancel}
			<CancelButton />
		{/if}
		{#if content?.right?.first}
			<Button
				classes={content?.right?.first?.classes}
				text={content?.right?.first?.text ?? ''}
				url={content?.right?.first?.url ?? ''}
				styles={[
					`height: ${content?.right?.first?.height ?? ''}`,
					`width: ${content?.right?.first?.width ?? ''}`,
				]}
			/>
		{/if}
		{#if content?.right?.second}
			<Button
				classes={content?.right?.second?.classes}
				text={content?.right?.second?.text ?? ''}
				url={content?.right?.second?.url ?? ''}
				styles={[
					`height: ${content?.right?.second?.height ?? ''}`,
					`width: ${content?.right?.second?.width ?? ''}`,
				]}
			/>
		{/if}
		{#if content?.right?.next}
			<NextButton url={content?.right?.next?.url} />
		{/if}
	</div>
</div>

<style>
	.footer {
		align-items: center;
		background-color: white;
		bottom: 0;
		box-shadow:
			0px var(--spacing05) var(--spacing10) rgba(20, 13, 49, 0.1),
			0px var(--spacing02) var(--spacing03) rgba(20, 13, 49, 0.2);
		display: flex;
		height: var(--spacing15);
		justify-content: space-between;
		left: 0;
		padding: 0 var(--spacing09);
		position: absolute;
		right: 0;
	}
	.left-side,
	.right-side {
		display: flex;
		gap: var(--spacing09);
	}
	.right-side {
		justify-content: right;
	}
</style>
