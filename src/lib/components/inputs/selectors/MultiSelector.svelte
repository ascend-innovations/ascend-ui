<script>
	import { Label, CheckboxSelectOption, ChevronSingleUpSmallIcon, ChevronSingleDownSmallIcon, InputError, SearchBar, getChecklistSelections } from '$lib/index.js'
	import { afterUpdate, beforeUpdate } from 'svelte'

	export let id = '',
		label = '',
		styles = [],
		validValue = true,
		callback = null,
		searchCallback = defaultSearchCallback,
		validationCallback = null,
		validationText = '',
		optionList = [],
		selectedValues = '',
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
		let allTrue = true
		for (let option of optionList) {
			if (option?.value !== 'All') {
				allTrue = allTrue && option.selected
			}
			if (option.value === 'All' && option.selected === true && allUnselected) {
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
			if (!allUnselected && option.selected === false) {
				//Unselects the 'All' option if it was previously selected and a box was unchecked.
				optionList = optionList.map((option) => {
					if (option?.value === 'All') {
						option.selected = false
					}
					return option
				})
				allUnselected = true
			}
		}
		if (allTrue === true) {
			for (let option of optionList) {
				if (option?.value === 'All') {
					option.selected = true
					allUnselected = false
					break
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
		class="multi-selector__control {open ? 'multi-selector__control--open' : ''}"
		style={styles.join(';')}
		aria="select"
	>
		<div
			class="multi-selector__label"
			on:click={openToggle}
		>
			<Label
				{id}
				{label}
				cursor
			/>
			{#if open}
				<ChevronSingleUpSmallIcon />
			{:else}
				<ChevronSingleDownSmallIcon />
			{/if}
		</div>
		{#if open}
			<div class="multi-selector__list">
				{#if searchable}
					<div class="multi-selector__search-bar">
						<SearchBar
							bind:query
							callback={searchCallback}
							styles={['width:100%']}
						/>
					</div>
				{/if}
				<div
					class="multi-selector__options-list"
					on:click={() => (selectedValues = optionList)}
				>
					{#if optionList.length === 0}
						<p>No results available</p>
					{:else}
						{#each optionList as optionItem}
							<CheckboxSelectOption
								id={optionItem.value}
								bind:checked={optionItem.selected}
								value={optionItem.value}
								{callback}
							/>
						{/each}
					{/if}
				</div>
			</div>
		{/if}
	</div>
	{#if validValue === false}
		<InputError text={validationText} />
	{/if}
</div>
