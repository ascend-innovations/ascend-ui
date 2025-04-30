import { describe, it, expect } from "vitest"
import { withinDateRange } from "$lib"


describe("", ()=>{
	it("Tests proper function of date objects", ()=>{
		console.log(withinDateRange("4-30-2025", "5-1-2025", "5-1-2025" ))
		expect(withinDateRange("4-30-2025", "5-1-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange("5-1-2025", "4-30-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange("4-30-2025", "5-1-2025", "5-2-2025" )).toBe(false)
		expect(withinDateRange("5-1-2024", "4-30-2025", "5-1-2025" )).toBe(false)
	})

	it("Tests improper function of date objects", ()=>{
		expect(withinDateRange( "4-30-2025", "", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "5-2-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "", "5-1-2025" )).toBe(false)
		expect(withinDateRange( "", "", "" )).toBe(false)
	})
	
	it("Tests improper function of date objects", ()=>{
		expect(withinDateRange( new Date("4-30-2025"), "5-1-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "5-2-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "", new Date("5-1-2025") )).toBe(false)
		expect(withinDateRange( "", "", "" )).toBe(false)
	})

	it("Tests improper function of date objects", ()=>{
		expect(withinDateRange( [], "5-1-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "5-2-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "", new Date("5-1-2025") )).toBe(false)
		expect(withinDateRange( "", "", "" )).toBe(false)
	})


})