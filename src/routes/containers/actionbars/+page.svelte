<script>
	import { ActionBar, BackButton, LoremIpsum, NextButton, PageFooter } from '$lib/index.js'
</script>

<h1>Action Bars</h1>
<LoremIpsum />
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
