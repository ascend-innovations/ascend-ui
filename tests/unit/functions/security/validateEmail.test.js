import { describe, it, expect } from "vitest";
import { validateEmail } from "$lib";

const functionName = "validateEmail"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(validateEmail('user@example.com')).toBe(true)
		expect(validateEmail('john.doe@company.co')).toBe(true)
		expect(validateEmail('a_b-c.d+e@sub.domain.com')).toBe(true)
		expect(validateEmail('email@localhost.localdomain')).toBe(true)
		expect(validateEmail('email@[192.168.0.1]')).toBe(true)
		expect(validateEmail('so.many.dots.but.valid@exam.ple.com')).toBe(true)
		expect(validateEmail('so.many.dots.but.valid@exam.ple.net')).toBe(true)
		expect(validateEmail('so.many.dots.but.valid@exam.ple.gov')).toBe(true)
		expect(validateEmail('ImTheLongestValidEmailAdressPossibleInTheSystemaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com')).toBe(true);
		
		expect(validateEmail('a@b.c')).toBe(false);
		expect(validateEmail('imTooLongToBeAValidEmailForOurSystemaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com')).toBe(false);
		expect(validateEmail('bad@@domain.com')).toBe(false);
		expect(validateEmail('noatsymbol.com')).toBe(false);
		expect(validateEmail('invalid@domain..com')).toBe(false);
		expect(validateEmail('invalid@.com')).toBe(false);
		expect(validateEmail('<script>@example.com'));
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(validateEmail(1234567890)).toBe(false);
		expect(validateEmail('')).toBe(false);
		expect(validateEmail(null)).toBe(false);
		expect(validateEmail([])).toBe(false);
		expect(validateEmail({})).toBe(false);
		expect(validateEmail(['email@superemail.com'])).toBe(false)

	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})
