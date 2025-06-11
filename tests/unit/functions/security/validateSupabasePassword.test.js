import { describe, it, expect } from "vitest";
import { validateSupabasePassword } from "$lib";

const functionName = " "

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		// Valid: all required character types, 8+ length
		expect(validateSupabasePassword('Abcdef1!')).toBe(true)
		expect(validateSupabasePassword('123_AbcD$')).toBe(true)
		expect(validateSupabasePassword('GoodPass9!')).toBe(true)
		expect(validateSupabasePassword('P@ssw0rdStrong')).toBe(true)

		// Invalid: too short
		expect(validateSupabasePassword('Ab1!')).toBe(false)

		// Invalid: missing uppercase
		expect(validateSupabasePassword('abcdef1!')).toBe(false)

		// Invalid: missing lowercase
		expect(validateSupabasePassword('ABCDEF1!')).toBe(false)

		// Invalid: missing number
		expect(validateSupabasePassword('Abcdefg!')).toBe(false)

		// Invalid: missing special character
		expect(validateSupabasePassword('Abcdefg1')).toBe(false)

		// Invalid: no variety
		expect(validateSupabasePassword('aaaaaaaa')).toBe(false)

		// Invalid: valid characters but missing diversity
		expect(validateSupabasePassword('ABCDEFGH')).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(validateSupabasePassword(null)).toBe(false)
		expect(validateSupabasePassword(undefined)).toBe(false)
		expect(validateSupabasePassword(12345678)).toBe(false)
		expect(validateSupabasePassword({})).toBe(false)
		expect(validateSupabasePassword(['Password1!'])).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})


// export default function validateSupabasePassword(password) {
// 	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
// 	const passingRegex = passwordRegex.test(password)
// 	return typeof password === 'string' && passingRegex
// }

