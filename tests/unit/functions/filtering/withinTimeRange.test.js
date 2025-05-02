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

	it("Tests function of date objects with missing values", ()=>{
		expect(withinTimeRange("", "12:00", "11:00" )).toBe(true)
        expect(withinTimeRange("10:00", "", "11:00" )).toBe(true)
        expect(withinTimeRange("12:00", "10:00", "" )).toBe(false)

        expect(withinTimeRange("", "12:00", "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", "", "11:00" )).toBe(false)
	})
	
	it("Tests function of date objects with improper values", ()=>{
		expect(withinTimeRange(["10:00"], "12:00", "11:00" )).toBe(true)
        expect(withinTimeRange("12:00", ["10:00"], "13:00" )).toBe(true)
        expect(withinTimeRange("12:00", "10:00", ["13:00"] )).toBe(true)

        expect(withinTimeRange(["10:00"], "12:00", "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", ["10:00"], "11:00" )).toBe(false)
		expect(withinTimeRange("10:00", "12:00", ["13:00"] )).toBe(false)

        expect(withinTimeRange({}, {}, "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", ["10:00"], "11:00" )).toBe(false)
		expect(withinTimeRange("10:00", "12:00", ["13:00"] )).toBe(false)

		expect(withinTimeRange(null, "12:00", "11:00" )).toBe(true)
        expect(withinTimeRange("10:00", null, "11:00" )).toBe(true)
        expect(withinTimeRange("12:00", "10:00", null )).toBe(false)
	})
})
