
export default function getStackedColorPalletFromData(data, seriesKey,  useTrans = false, usePrimary = true){
    let seriesSet = new Set()
    for (let currentEntry of data) {
        seriesSet.add(currentEntry[seriesKey])
    }

    return getStackedColorPallet(seriesSet.size, useTrans, usePrimary)
}