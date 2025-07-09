import { describe, it, expect } from "vitest"
import { withinDateRange } from "$lib"

const functionName = "withinDateRange"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		//console.log(withinDateRange("4-30-2025", "5-1-2025", "5-1-2025" ))
		expect(withinDateRange("4-30-2025", "5-1-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange("5-1-2025", "4-30-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange("4-30-2025", "5-1-2025", "5-2-2025" )).toBe(false)
		expect(withinDateRange("5-1-2024", "4-30-2025", "5-1-2025" )).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(withinDateRange( "4-30-2025", "", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "5-2-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "", "5-1-2025" )).toBe(false)
		expect(withinDateRange( "", "", "" )).toBe(false)

		expect(withinDateRange( [], "5-1-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "5-2-2025", "5-1-2025" )).toBe(true)
		expect(withinDateRange( "", "", new Date("5-1-2025") )).toBe(false)
		expect(withinDateRange( "", "", "" )).toBe(false)
	})
})
