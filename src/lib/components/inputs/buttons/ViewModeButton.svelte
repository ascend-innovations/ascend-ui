<script>
	export let listView

	function toggle() {
		listView = !listView
	}
</script>

<div class="view-mode">
	<button
		on:click={toggle}
		class={`view-mode-btn ${listView ? 'list-view-selected' : ''}`}
	>
		L
	</button>
	<button
		on:click={toggle}
		class={`view-mode-btn ${listView ? '' : 'grid-view-selected'}`}
	>
		G
	</button>
</div>

<style>
	
</style>
