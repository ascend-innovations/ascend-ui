export default function convertToCurrency(number) {
    console.log(number)
    const currency = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    console.log(currency)
    return currency
}