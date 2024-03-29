export default function sanitizeUserInput(string) {
	const map = {
		"'": '&#x27;',
		'"': '&quot;',
		'&': '&amp;',
		'/': '&#x2F;',
		'<': '&lt;',
		'=': '&#x3D;',
		'>': '&gt;',
		'`': '&#x60;',
	}
	return String(string).replace(/[&<>"'`=/\\]/g, (match) => map[match])
}
