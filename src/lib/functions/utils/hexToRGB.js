export default function hexToRGB(hex, a = null) {
	let r = 0,
		g = 0,
		b = 0
	if (hex.length === 7) {
		r = parseInt(hex.slice(1, 3), 16)
		g = parseInt(hex.slice(3, 5), 16)
		b = parseInt(hex.slice(5, 7), 16)
	}

	if (a === null) {
		return `rgb(${r}, ${g}, ${b})`
	} else {
		return `rgba(${r}, ${g}, ${b}, ${a})`
	}
}
