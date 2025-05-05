<script>
	import { Button } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'

	export let currentTab, icon, tab, tabIndex

	const dispatch = createEventDispatcher()

	function selectTab() {
		dispatch('tabselect', { tabIndex })
	}
</script>

<div class={`tab ${tabIndex === currentTab ? 'tab--selected' : ''}`}>
	<Button
		callback={selectTab}
		classes={['btn-tab', 'btn-full']}
		text={tab?.name}
		url={tab?.url ? tab?.url : ''}
		topIcon={icon}
	/>
</div>
