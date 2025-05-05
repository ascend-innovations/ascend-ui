import { describe, it, expect } from "vitest";
import { parseURL } from "$lib";

const functionName = "parseURL"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(parseURL("ascend.test.com/profile")).toStrictEqual(['ascend.test.com', 'profile' ])
		expect(parseURL("ascend.test.com/profile/cool_stuff/awesomeness")).toStrictEqual([ 'ascend.test.com', 'profile', 'cool_stuff', 'awesomeness' ])
		expect(parseURL("ascend.test.com/profile/cool_stuff/awesomeness///")).toStrictEqual(['ascend.test.com', 'profile', 'cool_stuff', 'awesomeness', '', '', ''])
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(parseURL("")).toBe("")
		expect(parseURL([])).toBe("")
		expect(parseURL({})).toBe("")
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})