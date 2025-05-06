import { it, expect, describe } from 'vitest'
import { isValidZipCode } from '$lib/index.js'

const functionName = "isValidZipCode"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(isValidZipCode('43210')).toBe(true)
		expect(isValidZipCode('12345-0091')).toBe(true)

		expect(isValidZipCode('0000')).toBe(false)
		expect(isValidZipCode('fewas')).toBe(false)

	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(isValidZipCode(12345)).toBe(false)
		expect(isValidZipCode(null)).toBe(false)
		expect(isValidZipCode()).toBe(false)
		expect(isValidZipCode(undefined)).toBe(false)
		expect(isValidZipCode({})).toBe(false)
		expect(isValidZipCode([])).toBe(false)
		expect(isValidZipCode("")).toBe(false)
		expect(isValidZipCode(true)).toBe(false)
		expect(isValidZipCode(false)).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})
