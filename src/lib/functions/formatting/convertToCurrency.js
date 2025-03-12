export default function convertToCurrency(number) {
    console.log(number)
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}