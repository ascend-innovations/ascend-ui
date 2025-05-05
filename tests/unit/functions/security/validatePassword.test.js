import { describe, it, expect } from "vitest";
import { validatePassword } from "$lib";

const functionName = "validatePassword"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(validatePassword('password1')).toBe(true)
		expect(validatePassword('PASSWORD123')).toBe(true)
		expect(validatePassword('PassWord123')).toBe(true)
		expect(validatePassword('abc123XY')).toBe(true)
		expect(validatePassword('AbC123AbC123AbC123AbC123AbC123AB')).toBe(true) // 32 chars

		expect(validatePassword('abc123')).toBe(false) 
		expect(validatePassword('a'.repeat(33))).toBe(false)
		expect(validatePassword('abc123!!')).toBe(false) 
		expect(validatePassword('P@ssword123')).toBe(false)
		expect(validatePassword('abc 12345')).toBe(false)
		expect(validatePassword('abc_12345')).toBe(false)
		expect(validatePassword('abc-12345')).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(validatePassword(null)).toBe(false)
		expect(validatePassword(undefined)).toBe(false)
		expect(validatePassword(12345678)).toBe(false)
		expect(validatePassword({})).toBe(false)
		expect(validatePassword(['password1'])).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})