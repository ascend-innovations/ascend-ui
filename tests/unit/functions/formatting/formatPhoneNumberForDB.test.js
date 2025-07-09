import { describe, it, expect } from "vitest";
import { formatPhoneNumberForDB } from "$lib";

const functionName = "formatPhoneNumberForDB"

describe(`Tests the operations of ${functionName}`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(formatPhoneNumberForDB("740-740-7400")).toBe("7407407400")
		expect(formatPhoneNumberForDB("740-740-7400")).toBe("7407407400")
		expect(formatPhoneNumberForDB("740-740-7400")).toBe("7407407400")
		expect(formatPhoneNumberForDB("(740)740-7400")).toBe("7407407400")
		expect(formatPhoneNumberForDB("(740) 740 7400")).toBe("7407407400")
		expect(formatPhoneNumberForDB("(740)     7407400")).toBe("7407407400")
	})
	
	it(`Tests ${functionName} using inproper input`, ()=>{
		console.log(formatPhoneNumberForDB(740740))
		console.log(formatPhoneNumberForDB(""))
		console.log(formatPhoneNumberForDB('abcdefg'))
		console.log(formatPhoneNumberForDB(null))
		console.log(formatPhoneNumberForDB([]))
		console.log(formatPhoneNumberForDB({}))
	})

	it(`Tests ${functionName} for additional special case: [case]`, ()=>{ //repeat as need.
		true
	})
})