export default function convertToCurrency(amount) {
    if (isNaN(amount)) {
        throw new Error("Invalid number");
    }
    // Ensure it's a number and round appropriately
    amount = parseFloat(amount);
    if (!showCents) {
        amount = Math.round(amount);
    }
    // Split into whole and decimal parts
    const [whole, decimal = "00"] = amount.toFixed(2).split(".");
    // Add commas for thousands
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return showCents ? `$${formattedWhole}.${decimal}` : `$${formattedWhole}`
}