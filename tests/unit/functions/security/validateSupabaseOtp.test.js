import { describe, it, expect } from "vitest";
import { validateSupabaseOtp } from "$lib";

const functionName = "validateSupabaseOtp"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(validateSupabaseOtp('123456')).toBe(true)
		expect(validateSupabaseOtp('000000')).toBe(true)

		expect(validateSupabaseOtp(true)).toBe(false)
		expect(validateSupabaseOtp("true")).toBe(false)
		expect(validateSupabaseOtp(`true`)).toBe(false) 
		expect(validateSupabaseOtp('abc123')).toBe(false) 
		expect(validateSupabaseOtp('aaaaaa')).toBe(false)
		expect(validateSupabaseOtp('-12345')).toBe(false) 

	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${validateSupabaseOtp} using inproper input`, ()=> {
		expect(validateSupabaseOtp(null)).toBe(false)
		expect(validateSupabaseOtp(undefined)).toBe(false)
		expect(validateSupabaseOtp(12345678)).toBe(false)
		expect(validateSupabaseOtp({})).toBe(false)
		expect(validateSupabaseOtp(['password1'])).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})