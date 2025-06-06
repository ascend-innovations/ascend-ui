import { describe, it, expect } from "vitest";
import { isValidTime } from "$lib";

const functionName = "isValidTime"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(isValidTime('12:00')).toBe(true)
		expect(isValidTime('23:59')).toBe(true)
		expect(isValidTime('00:00')).toBe(true)
		expect(isValidTime('01:01')).toBe(true)
		expect(isValidTime('9:30')).toBe(true)

		expect(isValidTime('24:00')).toBe(false)
		expect(isValidTime('12:60')).toBe(false)
		expect(isValidTime('12:00:00')).toBe(false)
		expect(isValidTime('1200')).toBe(false)
		expect(isValidTime('12-00')).toBe(false)
		expect(isValidTime('99:99')).toBe(false)
		expect(isValidTime('noon')).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(isValidTime(null)).toBe(false)
		expect(isValidTime(undefined)).toBe(false)
		expect(isValidTime({})).toBe(false)
		expect(isValidTime([])).toBe(false)
		expect(isValidTime(1200)).toBe(false)
		expect(isValidTime(true)).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})