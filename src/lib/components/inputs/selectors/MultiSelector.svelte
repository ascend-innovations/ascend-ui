<script>
	import { browser } from '$app/environment'
	import { Label, CheckboxInput, ChevronSingleDownSmallIcon, InputError, SearchBar, getChecklistSelections } from '$lib/index.js'
	import { afterUpdate, beforeUpdate, onMount } from 'svelte'

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
		allOptions = optionList,
		selector,
		selectorLabel,
		selectorList,
		selectorOptionList,
		icon

	function openToggle(e) {
		open = !open
		if (open) {
			icon.style.transform = 'rotate(180deg)'
			selectorList.style.display = 'block'
		} else {
			icon.style.transform = 'rotate(0deg)'
			selectorList.style.display = 'none'
		}
	}

	function getSelectedValues(e) {
		console.log(e.target)
		// let selected = optionList.filter((option) => option.selected).map((option) => option.value)
		// console.log(selected)
	}

	function defaultSearchCallback() {
		optionList = allOptions
		optionList = optionList.filter((el) => el.value.toLowerCase().includes(query.toLowerCase()))
	}

	// beforeUpdate(() => {
	// 	let allTrue = true
	// 	for (let option of optionList) {
	// 		if (option?.value !== 'All') {
	// 			allTrue = allTrue && option.selected
	// 		}
	// 		if (option.value === 'All' && option.selected === true && allUnselected) {
	// 			optionList = optionList.map((option) => {
	// 				option.selected = true
	// 				return option
	// 			})
	// 			allUnselected = false
	// 		}
	// 		if (option.value === 'All') {
	// 			if (option.selected === false && allUnselected === false) {
	// 				optionList = optionList.map((option) => {
	// 					option.selected = false
	// 					return option
	// 				})
	// 				allUnselected = true
	// 			}
	// 		}
	// 		if (!allUnselected && option.selected === false) {
	// 			//Unselects the 'All' option if it was previously selected and a box was unchecked.
	// 			optionList = optionList.map((option) => {
	// 				if (option?.value === 'All') {
	// 					option.selected = false
	// 				}
	// 				return option
	// 			})
	// 			allUnselected = true
	// 		}
	// 	}
	// 	if (allTrue === true) {
	// 		for (let option of optionList) {
	// 			if (option?.value === 'All') {
	// 				option.selected = true
	// 				allUnselected = false
	// 				break
	// 			}
	// 		}
	// 	}
	// })

	onMount(() => {
		if (browser) {
			selector = document.getElementById(`${id}`)
			selectorLabel = document.querySelector(`.multi-selector__label`)
			icon = document.querySelector(`.multi-selector__icon`)
			selectorList = document.querySelector(`.multi-selector__list`)
			selectorOptionList = document.querySelector(`.multi-selector__options-list`)
			
			selector.style.display = 'none'
			
			for (let option of optionList) {
				const opt = document.createElement('option')
				opt.value = option.value
				opt.textContent = option.value
				selector.appendChild(opt)

				const checkboxOption = document.createElement('div')
				checkboxOption.className = 'multi-selector__option '
				
				checkboxOption.innerHTML = `
					<label for="${id}-${option.value}" class="multi-selector__option__label">
						<div class="checkbox" id="${id}-${option.value}">
							<input
								type="checkbox"
								bind:checked
								{value}
							/>
							<div
								class="checkbox__checkmark"
								id="${id}-${option.value}-checkmark"
							>
							</div>
						</div>
						${option.value}
					</label>
				`

				selectorOptionList.appendChild(checkboxOption)
			}

			selectorLabel.addEventListener('click', (e) => openToggle(e))
			selectorList.addEventListener('click', (e) => getSelectedValues(e))
		}
	})
</script>

<div class="multi-selector">
	<select {id} multiple></select>
	<div
		{id}
		class="multi-selector__control {open ? 'multi-selector__control--open' : ''}"
		style={styles.join(';')}
		aria="select"
	>
		<div
			class="multi-selector__label"
		>
			<Label
				{id}
				{label}
				cursor
			/>
			<span class="multi-selector__icon">
				<ChevronSingleDownSmallIcon />
			</span>
		</div>
		<div class="multi-selector__list">
			<!-- {#if searchable}
				<div class="multi-selector__search-bar">
					<SearchBar
						bind:query
						callback={searchCallback}
						styles={['width:100%']}
					/>
				</div>
			{/if} -->
			<div class="multi-selector__options-list"></div>
		</div>
	</div>
	{#if validValue === false}
		<InputError text={validationText} />
	{/if}
</div>
