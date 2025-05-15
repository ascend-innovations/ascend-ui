import { describe, it, expect } from "vitest";
import { isValidMobilePhone } from "$lib";

const functionName = " "

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		
		expect(isValidMobilePhone("7407407400")).toBe(true)
		expect(isValidMobilePhone("740-740-7400")).toBe(true)
		expect(isValidMobilePhone("(740)740-7400")).toBe(true)
		expect(isValidMobilePhone("(740) 740-7400")).toBe(true)
		expect(isValidMobilePhone("(740) 740 7400")).toBe(true)
		expect(isValidMobilePhone("+1 (740) 740 7400")).toBe(true)
		expect(isValidMobilePhone("+1 740 740 7400")).toBe(true)

		expect(isValidMobilePhone(7407407400)).toBe(false)
		expect(isValidMobilePhone("(740)0")).toBe(false)
		expect(isValidMobilePhone("7500000000000000000000000000000000000")).toBe(false)
		expect(isValidMobilePhone("0 0 0 0 0 0 0 0 0 0")).toBe(false)
		expect(isValidMobilePhone("")).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(isValidMobilePhone()).toBe(false)
		expect(isValidMobilePhone([])).toBe(false)
		expect(isValidMobilePhone(false)).toBe(false)
		expect(isValidMobilePhone(true)).toBe(false)
		expect(isValidMobilePhone(undefined)).toBe(false)
		expect(isValidMobilePhone("")).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})