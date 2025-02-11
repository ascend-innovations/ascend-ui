<script>
	import { ActionBar, BackButton, LoremIpsum, NextButton, Page, PageBody, PageFooter } from '$lib/index.js'
</script>

<Page>
	<PageBody>
		<h1>Action Bars</h1>
		<LoremIpsum />
	</PageBody>
	<PageFooter>
		<ActionBar>
			<div slot="leftSide">
				<BackButton />
			</div>
			<div slot="rightSide">
				<NextButton />
			</div>
		</ActionBar>
	</PageFooter>
</Page>
