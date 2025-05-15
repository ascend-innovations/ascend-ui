import { it, expect, describe } from 'vitest'
import { consolodateMonths, consolodateYears } from "$lib";
import consolidateYears from '$lib/functions/charts/consolidateMonths';


describe("Tests that consolodateYears proerly handles bad data ", () =>{
    let data = [
		{ date: '2024-01-01T00:00:00-05:00', series: 'CIT', value: 1400.33 },
		{ date: '2024-01-15T00:00:00-05:00', series: 'CIT', value: 1600.12 },
		{ date: '2024-01-25T00:00:00-05:00', series: 'CIT', value: 1300.05 },
		{ date: '2025-02-01T00:00:00-05:00', series: 'CIT', value: 1000.99 },
		{ date: '2025-02-15T00:00:00-05:00', series: 'CIT', value: 900.56 },
		{ date: '2025-02-25T00:00:00-05:00', series: 'CIT', value: 700.65 },
		{ date: '2026-03-01T00:00:00-05:00', series: 'CIT', value: 1300.12 },
		{ date: '2026-03-15T00:00:00-05:00', series: 'CIT', value: 1500.42 },
		{ date: '2026-03-20T00:00:00-05:00', series: 'CIT', value: 1500.97 },
		{ date: '2027-03-25T00:00:00-05:00', series: 'CIT', value: 1400.66 },
		{ date: '2027-04-01T00:00:00-05:00', series: 'CIT', value: 1900.17 },
		{ date: '2027-04-10T00:00:00-05:00', series: 'CIT', value: 2100.71 },
		{ date: '2028-04-15T00:00:00-05:00', series: 'CIT', value: 2000.28 },
		{ date: '2028-04-20T00:00:00-05:00', series: 'CIT', value: 1900.83 },
		{ date: '2028-04-25T00:00:00-05:00', series: 'CIT', value: 1900.92 },
		{ date: '2029-05-01T00:00:00-05:00', series: 'CIT', value: 3100.01 },
		{ date: '2029-05-15T00:00:00-05:00', series: 'CIT', value: 3000.11 },
		{ date: '2030-06-01T00:00:00-05:00', series: 'CIT', value: 1700.54 },
		{ date: '2030-06-01T00:00:00-05:00', series: 'CIT', value: 1500.33 },
		{ date: '2031-06-01T00:00:00-05:00', series: 'CIT', value: 1600.42 },
		{ date: '2031-06-27T00:00:00-05:00', series: 'CIT', value: 1900.53 },
		{ date: '2031-07-01T00:00:00-05:00', series: 'CIT', value: 2000.75 },
		{ date: '2032-07-15T00:00:00-05:00', series: 'CIT', value: 2300.91 },
		{ date: '2032-07-25T00:00:00-05:00', series: 'CIT', value: 800.19 },
		{ date: '2032-08-15T00:00:00-05:00', series: 'CIT', value: 340.04 },
		{ date: '2033-08-25T00:00:00-05:00', series: 'CIT', value: 300.12 },
        { date: '2033-08-01T00:00:00-05:00', series: 'CIT', value: 500.07 },
		{ date: '2033-09-01T00:00:00-05:00', series: 'CIT', value: 200.99 },
		{ date: '2034-09-15T00:00:00-05:00', series: 'CIT', value: 250.99 },
		{ date: '2034-09-25T00:00:00-05:00', series: 'CIT', value: 300.99 },
		{ date: '2034-10-01T00:00:00-05:00', series: 'CIT', value: 700.86 },
		{ date: '2035-10-20T00:00:00-05:00', series: 'CIT', value: 1000.47 },
		{ date: '2035-11-01T00:00:00-05:00', series: 'CIT', value: 2200.46 },
		{ date: '2035-11-10T00:00:00-05:00', series: 'CIT', value: 2400.84 },
		{ date: '2036-11-15T00:00:00-05:00', series: 'CIT', value: 2600.32 },
		{ date: '2036-11-20T00:00:00-05:00', series: 'CIT', value: 2700.14 },
		{ date: '2036-11-25T00:00:00-05:00', series: 'CIT', value: 2500.71 },
		{ date: '2037-12-01T00:00:00-05:00', series: 'CIT', value: 2300.17 },
		{ date: '2037-12-15T00:00:00-05:00', series: 'CIT', value: 2400.99 },
		{ date: '2037-12-15T00:00:00-05:00', series: 'CIT', value: 2000.07 },
	]

    let domain = "date"
    let chartData = JSON.parse(JSON.stringify(data))
    for (let obj of chartData) {
        obj[domain] = new Date(obj[domain])
    }
    let testDate = new Date("2024-01-01T05:00:00.000Z")
    let consolidatedYears = consolidateYears(chartData, "date", "value")
    //console.log(consolidatedYears)
    it('Tests consolidateYears with proper input', () =>{
        
        expect(consolidatedYears[0]).toEqual(
            {
                date: testDate,
                series: 'CIT', 
                value: 4301
            }
        )
    })
    
    it("Tests that consolodateYears is of proper length", ()=> {
        expect(consolidatedYears.length).toBe(12)
    })

    it("Tests that consolodateYears does not crash on improper input", ()=> {
        let data2 = [
            { date: '2024-01-01T00:00:00-05:00', value: 1400.33 },
            { date: '2024-01-15T00:00:00-05:00', series: 'CIT', value: 1600.12 },
            { date: '2024-01-25T00:00:00-05:00',  value: 1300.05 },
            { date: '2025-02-01T00:00:00-05:00', series: 'CIT', value: 1000.99 },
            { date: '2025-02-15T00:00:00-05:00',  value: 900.56 },
            { date: '2025-02-25T00:00:00-05:00',  value: 700.65 },
            { date: '2026-03-01T00:00:00-05:00', series: 'CIT', value: 1300.12 },
            { date: '2026-03-15T00:00:00-05:00', series: 'CIT', value: 1500.42 },
            { date: '2026-03-20T00:00:00-05:00', series: 'CIT', value: 1500.97 },
            { date: '2027-03-25T00:00:00-05:00', series: 'CIT', value: 1400.66 },
            { date: '2027-04-01T00:00:00-05:00', series: 'CIT', value: 1900.17 },
            { date: '2027-04-10T00:00:00-05:00', series: 'CIT', value: 2100.71 },
            { date: '2028-04-15T00:00:00-05:00', series: 'CIT', value: 2000.28 },
            { date: '2028-04-20T00:00:00-05:00', series: 'CIT', value: 1900.83 },
            { date: '2028-04-25T00:00:00-05:00', series: 'CIT', value: 1900.92 },
            { date: '2029-05-01T00:00:00-05:00', series: 'CIT', value: 3100.01 },
            { date: '2029-05-15T00:00:00-05:00', series: 'CIT', value: 3000.11 },
            { date: '2030-06-01T00:00:00-05:00', series: 'CIT', value: 1700.54 },
            { date: '2030-06-01T00:00:00-05:00', series: 'CIT', value: 1500.33 },
            { date: '2031-06-01T00:00:00-05:00', series: 'CIT', value: 1600.42 },
            { date: '2031-06-27T00:00:00-05:00', series: 'CIT', value: 1900.53 },
            { date: '2031-07-01T00:00:00-05:00', series: 'CIT', value: 2000.75 },
            { date: '2032-07-15T00:00:00-05:00', series: 'CIT', value: 2300.91 },
            { date: '2032-07-25T00:00:00-05:00', series: 'CIT', value: 800.19 },
            { date: '2032-08-15T00:00:00-05:00', series: 'CIT', value: 340.04 },
            { date: '2033-08-25T00:00:00-05:00', series: 'CIT', value: 300.12 },
            { date: '2033-08-01T00:00:00-05:00', series: 'CIT', value: 500.07 },
            { date: '2033-09-01T00:00:00-05:00', series: 'CIT', value: 200.99 },
            { date: '2034-09-15T00:00:00-05:00', series: 'CIT', value: 250.99 },
            { date: '2034-09-25', series: 'CIT', value: 300.99 },
            { date: '2034-10-01T00:00:00-05:00', series: 'CIT', value: 700.86 },
            { date: '2035-10-20', series: 'CIT', value: 1000.47 },
            { date: '2035-11-01', series: 'CIT', value: 2200.46 },
            { date: '2035-11-10', series: 'CIT', value: 2400.84 },
            { date: '', series: 'CIT', value: 2600.32 },
            { date: '', series: 'CIT', value: 2700.14 },
            { date: '', series: 'CIT', value: 2500.71 },
            { date: '2037-12-01T00:00:00-05:00', series: 'CIT', },
            { date: '2037-12-15T00:00:00-05:00', series: 'CIT', },
            { date: '2037-12-15T00:00:00-05:00', series: 'CIT', },
        ]
    
        let domain = "date"
        let chartData2 = JSON.parse(JSON.stringify(data2))
        for (let obj of chartData2) {
            obj[domain] = new Date(obj[domain])
        }
        let testDate2 = new Date("2023-01-01T05:00:00.000Z")
        let consolidatedYears = consolidateYears(chartData2, "date", "value")

        //console.log(consolidatedYears)

    })

    it("Tests that consolodateYears does not crash on too few entries", ()=> {
        let data3 = [
            { date: '2023-01-01T00:00:00-05:00', series: 'CIT', value: 1400.33 }
            ]
        
        let chartData3 = JSON.parse(JSON.stringify(data3))
        for (let obj of chartData3) {
            obj[domain] = new Date(obj[domain])
        }
        let testDate3 = new Date("2023-01-01T05:00:00.000Z")
        let consolidatedYears3 = consolodateYears(chartData3, "date", "value")
        
        //console.log(consolodatedMonths3)
    })
})
