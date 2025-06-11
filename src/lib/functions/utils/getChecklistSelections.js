export default function getChecklistSelections(list, parameter = 'value') {
	const selected = []
	for (let item of list) {
		if (item[parameter] === 'All') continue
		if (item.selected === true) {
			selected.push(item[parameter])
		}
	}
	return selected
}
