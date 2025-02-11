<script>
	import { Label, CheckboxSelectOption, ChevronSingleUpSmallIcon, ChevronSingleDownSmallIcon, InputError, SearchBar } from '$lib/index.js'
	import { beforeUpdate } from 'svelte'

	export let id = '',
		label = '',
		styles = [],
		validValue = true,
		callback = null,
		searchCallback = defaultSearchCallback,
		validationCallback = null,
		validationText = '',
		optionList = [],
		query = '',
		searchable = false

	let open = false,
		allUnselected = null,
		allOptions = optionList

	function openToggle() {
		open = !open
	}

	function defaultSearchCallback() {
		optionList = allOptions
		optionList = optionList.filter((el) => el.value.toLowerCase().includes(query.toLowerCase()))
	}

	beforeUpdate(() => {
		for (let option of optionList) {
			if (option.value === 'All' && option.selected === true) {
				optionList = optionList.map((option) => {
					option.selected = true
					return option
				})
				allUnselected = false
			}
			if (option.value === 'All') {
				if (option.selected === false && allUnselected === false) {
					optionList = optionList.map((option) => {
						option.selected = false
						return option
					})
					allUnselected = true
				}
			}
		}
	})
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="multi-selector">
	<div
		{id}
		class="multi-selector-control {open ? 'open-selector-control' : ''}"
		style={styles.join(';')}
		aria="select"
	>
		<div
			class="multiselect-label-wrapper"
			on:click={openToggle}
		>
			<Label
				{id}
				{label}
			/>
			{#if open}
				<ChevronSingleUpSmallIcon />
			{:else}
				<ChevronSingleDownSmallIcon />
			{/if}
		</div>
		{#if open}
			<div class="multiselect-list-content">
				{#if searchable}
					<div class="multiselect-search-bar-wrapper">
						<SearchBar
							bind:query
							callback={searchCallback}
						/>
					</div>
				{/if}
				<div class="multiselect-options-list">
					{#each optionList as optionItem}
						<CheckboxSelectOption
							id={optionItem.value}
							bind:checked={optionItem.selected}
							value={optionItem.value}
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
	{#if validValue === false}
		<InputError text={validationText} />
	{/if}
</div>
