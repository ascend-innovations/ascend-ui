<script>
	import { browser } from '$app/environment'
	import { Label, CheckboxInput, ChevronSingleDownSmallIcon, InputError, SearchBar, getChecklistSelections, CheckExtraSmallIcon } from '$lib/index.js'
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
		selectedValues = new Set(),
		query = '',
		searchable = false

	let open = false,
		allUnselected = null,
		allOptions = optionList,
		selector,
		selectorLabel,
		selectorList,
		selectorOptionList,
		icon,
		checkMarkSvg = `<div
			class="icon-wrapper"
		>
		<svg
			fill="none"
			height="16"
			viewBox="0 0 16 16"
			width="16"
		><path
			d="M13 5L5.99984 12L3 9"
			stroke="var(--neutral-base)"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		</svg>
		</div>`

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
		let target, checkmarkBox
		if (e.target.className === 'checkbox__checkmark') {
			target = e.target.parentElement.querySelector('input')
			target.setAttribute('data-is-checked', target.getAttribute('data-is-checked') === 'true' ? 'false' : 'true')
			checkmarkBox = target.parentElement.querySelector('.checkbox__checkmark')
		} else {
			target = e.target.querySelector('input')
			target.setAttribute('data-is-checked', target.getAttribute('data-is-checked') === 'true' ? 'false' : 'true')
			checkmarkBox = e.target.querySelector('.checkbox__checkmark')
		}
		
		if (target.getAttribute('data-is-checked') === 'true') {
			checkmarkBox.style.backgroundColor = 'var(--primary-500)'
			checkmarkBox.innerHTML = checkMarkSvg
		} else {
			checkmarkBox.style.backgroundColor = 'transparent'
			checkmarkBox.innerHTML = ''
		}


		for (let option of selectorOptionList.childNodes.values()) {
			let input = option.querySelector('input')
			if (input.getAttribute('data-is-checked') === 'true') {
				selectedValues.add(input.value)
			}
		}
		for (let option of selector.childNodes.values()) {
			option.selected = selectedValues.has(option.value)
		}
	}

	function defaultSearchCallback() {
		optionList = allOptions
		optionList = optionList.filter((el) => el.value.toLowerCase().includes(query.toLowerCase()))
	}

	function updateAll() {
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
	}

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
				opt.value = option
				opt.textContent = option
				selector.appendChild(opt)

				const checkboxOption = document.createElement('div')
				checkboxOption.className = 'multi-selector__option '
				
				checkboxOption.innerHTML = `
					<label for="${id}-${option}" class="multi-selector__option__label">
						<div class="checkbox" id="${id}-${option}">
							<input
								data-is-checked="false"
								type="checkbox"
								value="${option}"
							/>
							<div
								class="checkbox__checkmark"
								id="${id}-${option}-checkmark"
							>
							</div>
						</div>
						${option}
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
			<label
				class="semibold"
				for={id}
				style='cursor: pointer'
			>
				{label}
			</label>
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
