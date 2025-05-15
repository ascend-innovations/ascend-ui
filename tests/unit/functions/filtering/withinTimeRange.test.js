import { describe, it, expect } from "vitest"
import { withinTimeRange } from "$lib"

const functionName = "withinTimeRange"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(withinTimeRange("10:00", "12:00", "11:00" )).toBe(true)
        	expect(withinTimeRange("12:00", "10:00", "13:00" )).toBe(true)

        	expect(withinTimeRange("10:00", "12:00", "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", "10:00", "11:00" )).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(withinTimeRange("", "12:00", "11:00" )).toBe(true)
        	expect(withinTimeRange("10:00", "", "11:00" )).toBe(true)
        	expect(withinTimeRange("12:00", "10:00", "" )).toBe(false)

        	expect(withinTimeRange("", "12:00", "13:00" )).toBe(false)
		expect(withinTimeRange("12:00", "", "11:00" )).toBe(false)

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

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})
