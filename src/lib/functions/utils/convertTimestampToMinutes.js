export default function convertTimestampToMinutes(timestamp, formatString = "HH:MM", dropSeconds=true) {
    /**
     * Converts a time string (e.g., "12:30:45") into the total number of minutes.
     *
     * @param {string} timestamp - The time string to convert, formatted according to `formatString` (e.g., "12:30:45").
     * @param {string} [formatString="HH:MM"] - The format of the input string, using "DD", "HH", "MM", "SS", or "XX" (e.g., "HH:MM:SS").
     * @param {boolean} [dropSeconds=true] - If true, ignores the seconds portion; if false, includes seconds rounded to the nearest minute.
     * @returns {number} The total number of minutes represented by the input string.
    */

    let totalMinutes = 0;
    let timestampArray = timestamp.split(":")
    let formatArray = formatString.split(":")

    if(!(Array.isArray(formatArray) && Array.isArray(timestampArray))){
        console.warn("bad input supplied to time conversion.")
        return 0
    }

    for(let i = 0; i < formatArray.length; i++){
        const formatSymbol = formatArray[i]
        const timeValue = parseInt(timestampArray[i], 10) || 0
        switch (formatSymbol) {
            case "DD":
                totalMinutes += timeValue * 24 * 60;
                break;
            case "HH":
                totalMinutes += timeValue * 60;
                break;
            case "MM":
                totalMinutes += timeValue;
                break;
            case "SS":
                if(dropSeconds){
                    // do nothing
                } else {
                    totalMinutes += timeValue / 60;
                }
                break;
            case "XX":
                //skip this section.
                break;
            default:
                console.warn(`Unknown format symbol: ${formatSymbol}`);
        }
    }
    
    return totalMinutes
}