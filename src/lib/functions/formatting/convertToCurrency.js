export default function convertToCurrency(amount, showCents = true) {
	
	const valudatedNumber = Number(amount)

	if (isNaN(valudatedNumber)) {
		throw new Error('Invalid number')
	}
	// Ensure it's a number and round appropriately
	amount = parseFloat(valudatedNumber)
	if (!showCents) {
		amount = Math.round(amount)
	}
	// Split into whole and decimal parts
	const [whole, decimal = '00'] = amount.toFixed(2).split('.')
	// Add commas for thousands
	const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return showCents ? `$${formattedWhole}.${decimal}` : `$${formattedWhole}`
}
