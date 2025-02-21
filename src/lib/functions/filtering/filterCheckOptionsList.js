export default function filterCheckOptionsList(optionList, allOptions, query) {
	optionList = allOptions
	return optionList.filter((el) => el.value.toLowerCase().includes(query.toLowerCase()))
}
