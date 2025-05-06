import { describe, it, expect } from "vitest";
import {isValidUrl} from '$lib'

const functionName = " "

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(isValidUrl('http://example.com')).toBe(true)
		expect(isValidUrl('https://www.google.com')).toBe(true)
		expect(isValidUrl('https://sub.domain.com/path?query=123')).toBe(true)
		//expect(isValidUrl('http://localhost:3000')).toBe(true)
		expect(isValidUrl('https://example.co.uk')).toBe(true)
		expect(isValidUrl('ftp://ftp.example.com')).toBe(true)
		expect(isValidUrl('www.example.com')).toBe(true)
		
		expect(isValidUrl('http:/example.com')).toBe(false)
		expect(isValidUrl('://broken.com')).toBe(false)
		expect(isValidUrl('https:/example')).toBe(false)
		expect(isValidUrl('example')).toBe(false)
		expect(isValidUrl('')).toBe(false)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(isValidUrl(null)).toBe(false)
		expect(isValidUrl(undefined)).toBe(false)
		expect(isValidUrl({})).toBe(false)
		expect(isValidUrl([])).toBe(false)
		expect(isValidUrl(1234)).toBe(false)
		expect(isValidUrl(true)).toBe(false)
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})