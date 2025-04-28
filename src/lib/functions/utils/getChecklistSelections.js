export default function getChecklistSelections(list, parameter = 'value') {
	const selected = []
	for (let item of list) {
		if (item[parameter] === 'All') continue
		if (item.selected) {
			selected.push(item[parameter])
		}
	}
	return selected
}
