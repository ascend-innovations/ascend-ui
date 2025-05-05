<script>
	export let listView

	function toggle() {
		listView = !listView
	}
</script>

// PROPOSE SCRAP THIS SINCE ITS FUNCTION CAN BE DUPLICATED BY
// TOGGLE SWITCH

<div class="view-mode">
	<button
		on:click={toggle}
		class={`view-mode__button ${listView ? 'view-mode--list' : ''}`}
	>
		L
	</button>
	<button
		on:click={toggle}
		class={`view-mode__button ${listView ? '' : 'view-mode--grid'}`}
	>
		G
	</button>
</div>
