<script>
	import { AscendLogoWithText } from '$lib/index.js'

	export let cardHeadline
</script>

<div class="reset">
	<div class="ascend-icon">
		<img
			src={AscendLogoWithText}
			alt="ascend-logo"
		/>
	</div>
	<div class="headline-l-xxl header">{cardHeadline}</div>
	<slot />
</div>

<style>
	.reset {
		align-items: flex-start;
		background-color: var(--white-trans-900);
		border-radius: var(--spacing11);
		border: var(--spacing00) solid var(--neutral-trans-100);
		box-shadow: var(--neutral-shadow-s);
		display: flex;
		flex-direction: column;
		gap: var(--spacing11);
		height: fit-content;
		padding: var(--spacing13);
		width: var(--spacing27);
	}
	.ascend-icon {
		width: 100%;

		& img {
			display: block;
			margin: auto;
		}
	}
	.header {
		margin: auto;
		text-align: center;
	}
</style>
