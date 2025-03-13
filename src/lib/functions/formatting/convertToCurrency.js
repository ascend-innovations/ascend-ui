export default function convertToCurrency(amount, showCents = true) {
    // if (isNaN(amount)) {
    //     throw new Error("Invalid number");
    // }
    // Ensure it's a number and round appropriately
    amount = parseFloat(amount);
    if (!showCents) {
        amount = Math.round(amount);
    }
    // Split into whole and decimal parts
    const [whole, decimal = "00"] = amount.toFixed(2).split(".");
    // Add commas for thousands
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(`$${formattedWhole}.${decimal}`)
    return showCents ? `$${formattedWhole}.${decimal}` : `$${formattedWhole}`
}

convertToCurrency(832.36)
convertToCurrency(952.86)
convertToCurrency(507.4)
convertToCurrency(867.13)
convertToCurrency(932.84)
convertToCurrency(62.35)
convertToCurrency(14426.43)
    
    908.54
    673.12
    830.41
    163.19
    337.11
    275.75
    276.36
    553.13
    509.68
    553.5
    658.11
    951.57
    629.33
    461.49
    990.76
    688.62
    588.41
    222.41
    