import { describe, it, expect } from "vitest";
import { sanitizeUserInput } from "$lib";
const functionName = "sanitizeUserInput"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(sanitizeUserInput('<script>')).toBe('&lt;script&gt;')
		expect(sanitizeUserInput('"double quotes"')).toBe('&quot;double quotes&quot;')
		expect(sanitizeUserInput("it's fine")).toBe('it&#x27;s fine')
		expect(sanitizeUserInput('a & b')).toBe('a &amp; b')
		expect(sanitizeUserInput('x = 1')).toBe('x &#x3D; 1')
		expect(sanitizeUserInput('/path')).toBe('&#x2F;path')
		expect(sanitizeUserInput('use `backticks`')).toBe('use &#x60;backticks&#x60;')
		expect(sanitizeUserInput('hello world')).toBe('hello world')

		const input = `<img src="x" onerror='alert(1)'/>`
		const expected = "&lt;img src&#x3D;&quot;x&quot; onerror&#x3D;&#x27;alert(1)&#x27;&#x2F;&gt;"
		expect(sanitizeUserInput(input)).toBe(expected)

		expect(sanitizeUserInput('\\')).toBe('&#x5C;')
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(sanitizeUserInput(123)).toBe('123')
		expect(sanitizeUserInput(true)).toBe('true')
		expect(sanitizeUserInput(null)).toBe('null')
		expect(sanitizeUserInput(undefined)).toBe('undefined')
		expect(sanitizeUserInput('')).toBe('')
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})

