<script>
	import { Label, CheckboxSelectOption, ChevronSingleUpSmallIcon, ChevronSingleDownSmallIcon, InputError, SearchBar, getChecklistSelections } from '$lib/index.js'
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
		selectedValues = [],
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
			if(option?.value != "All"){
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
			if(!allUnselected && option.selected === false){ //Unselects the 'All' option if it was previously selected and a box was unchecked.
				optionList = optionList.map((option) => {
						if(option?.value === 'All'){
							option.selected = false
						}
						return option
					})	
					allUnselected = true
			}
		}
		if(allTrue === true){
			for(let option of optionList){
				if(option?.value === "All"){
					option.selected = true
					allUnselected = false
					break
				}
			}
		}

		selectedValues = getChecklistSelections(optionList)
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
			class="label-wrapper"
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
			<div class="list-content">
				{#if searchable}
					<div class="search-bar-wrapper">
						<SearchBar
							bind:query
							callback={searchCallback}
							styles={['width:100%']}
						/>
					</div>
				{/if}
				<div class="options-list">
					{#if optionList.length === 0}
						<p>No results available</p>
					{:else}
						{#each optionList as optionItem}
							<CheckboxSelectOption
								id={optionItem.value}
								bind:checked={optionItem.selected}
								value={optionItem.value}
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

<style>
	.multi-selector {
		position: relative;
		border-radius: var(--spacing05);
		border: var(--spacing00) solid var(--neutral-100);
	}
	.multi-selector-control {
		min-width: 260px;
		display: flex;
		flex-direction: column;
		width: 100%;
		background: none;
		overflow: hidden;
		border-radius: var(--spacing05);
	}
	.open-selector-control {
		border-radius: var(--spacing05);
	}
	.label-wrapper {
		display: flex;
		justify-content: space-between;
		padding: var(--spacing05) var(--spacing05) var(--spacing05) var(--spacing09);
		border-radius: var(--spacing05) var(--spacing05) 0 0;
		/* border: var(--spacing00) solid var(--neutral-100); */
		cursor: pointer;
	}
	.list-content {
		width: 100%;
		top: 100%;
		left: 0;
		/* margin-top: var(--spacing03); */
		background-color: white;
		border-top: var(--spacing00) solid var(--neutral-100);
		border-radius: 0 0 var(--spacing05) var(--spacing05);
		/* border: var(--spacing00) solid var(--neutral-100); */
		z-index: 1;
	}
	.search-bar-wrapper {
		padding-left: var(--spacing05);
		padding-right: var(--spacing05);
		padding-top: var(--spacing05);
	}
	.options-list {
		padding: var(--spacing05);
		height: 220px;
		overflow-y: scroll;

		& p {
			text-align: center;
			color: var(--neutral-400);
			padding-top: var(--spacing05);
		}
	}
</style>
