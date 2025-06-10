<script>
	import { Card, ConfirmButton, ProgressBar, ProgressSpinner, PageLoadingSpinner } from '$lib/index.js'

	let progress = 0
</script>

<h1>Progress</h1>
<Card
	title="Progress Bars"
	styles={['width: 100%']}
>
	<div>
		<h3>Alert Progress Bar ({progress * 10}%)</h3>
		<div style="display: flex">
			<button
				class="btn-primary btn-m"
				on:click={() => (progress = progress - 1)}>Less</button
			>
			<button
				class="btn-primary btn-m"
				on:click={() => (progress = progress + 1)}>More</button
			>
		</div>
		<br />
		<ProgressBar
			bind:value={progress}
			max="10"
			type="alert"
		/>
	</div>
	<br />
	<div>
		<h3>Error Progress Bar (50%)</h3>
		<br />
		<ProgressBar
			value="50"
			type="error"
		/>
	</div>
	<br />
	<div>
		<h3>Info Progress Bar (75%)</h3>
		<br />
		<ProgressBar
			value="75"
			type="info"
		/>
	</div>
	<br />
	<div>
		<h3>Success Progress Bar (100%)</h3>
		<br />
		<ProgressBar
			value="100"
			type="success"
		/>
	</div>
</Card>
<br />
<Card
	title="Progress Animation"
	styles={['width: 100%']}
>
	<ProgressSpinner active="true" />
	<ConfirmButton loading={true} />
</Card>

<PageLoadingSpinner />
