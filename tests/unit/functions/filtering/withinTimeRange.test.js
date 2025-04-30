import { describe, it, expect } from "vitest"
import { withinTimeRange } from "$lib"


describe("", ()=>{
	it("Tests proper function of date objects", ()=>{
		console.log(withinTimeRange("10:00", "12:00", "11:00" ))
		expect(withinTimeRange("10:00", "12:00", "11:00" )).toBe(true)
        expect(withinTimeRange("12:00", "10:00", "13:00" )).toBe(true)

        expect(withinTimeRange("10:00", "12:00", "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", "10:00", "11:00" )).toBe(false)
	})

	it("Tests improper function of date objects", ()=>{
		expect(withinTimeRange("", "12:00", "11:00" )).toBe(true)
        expect(withinTimeRange("10:00", "", "11:00" )).toBe(true)
        expect(withinTimeRange("12:00", "10:00", "13:00" )).toBe(true)

        expect(withinTimeRange("10:00", "12:00", "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", "10:00", "11:00" )).toBe(false)
	})
	
	// it("Tests improper function of date objects", ()=>{
	// 	expect(withinTimeRange( new Date("4-30-2025"), "5-1-2025", "5-1-2025" )).toBe(true)
	// 	expect(withinTimeRange( "", "5-2-2025", "5-1-2025" )).toBe(true)
	// 	expect(withinTimeRange( "", "", new Date("5-1-2025") )).toBe(false)
	// 	expect(withinTimeRange( "", "", "" )).toBe(false)
	// })

})