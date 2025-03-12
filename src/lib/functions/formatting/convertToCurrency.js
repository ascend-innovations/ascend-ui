export default function convertToCurrency(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}