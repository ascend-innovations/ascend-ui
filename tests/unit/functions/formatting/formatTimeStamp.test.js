import { describe, it, expect } from "vitest";
import { formatTimeStamp } from "$lib";

const functionName = "formatTimeStamp"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(formatTimeStamp('2025-05-02')).toBe('8:00PM 5/1/2025');
		expect(formatTimeStamp('2025-05-02T14:23:00Z')).toBe('10:23AM 5/2/2025');
		expect(formatTimeStamp('2025-05-02T14:23:00+00:00')).toBe('10:23AM 5/2/2025');
		expect(formatTimeStamp('2025-05-02T14:23:00.123Z')).toBe('10:23AM 5/2/2025');
		expect(formatTimeStamp('2025-05-02 14:23:00')).toBe('2:23PM 5/2/2025');
		expect(formatTimeStamp('May 2, 2025 2:23 PM')).toBe('2:23PM 5/2/2025');
		expect(formatTimeStamp('05/02/2025 14:23:00')).toBe('2:23PM 5/2/2025');
		expect(formatTimeStamp('2025/05/02 14:23')).toBe('2:23PM 5/2/2025');
		expect(formatTimeStamp('Fri, 02 May 2025 14:23:00 GMT')).toBe('10:23AM 5/2/2025');
		expect(formatTimeStamp(new Date('2025-05-02T14:23:00Z'))).toBe('10:23AM 5/2/2025');
		expect(formatTimeStamp(1714656180 * 1000)).toBe('9:23AM 5/2/2024');
		expect(() => formatTimeStamp('2025-05-02')).not.toThrow();
		expect(formatTimeStamp('2025-02-30')).toBe('7:00PM 3/1/2025');
		expect(formatTimeStamp(['2067-05-02'])).toBe('8:00PM 5/1/2067');
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(formatTimeStamp('2025-13-01')).toBe('');
		expect(formatTimeStamp('2025-05-02 25:00:00')).toBe('');
		expect(formatTimeStamp('2025/13/01')).toBe('');
		expect(formatTimeStamp('not-a-date')).toBe('');
		expect(formatTimeStamp('')).toBe('');
		expect(formatTimeStamp(null)).toBe('');
		expect(formatTimeStamp(undefined)).toBe('');
		expect(formatTimeStamp({ date: '2025-05-02' })).toBe('');
		expect(formatTimeStamp(true)).toBe('');
		expect(formatTimeStamp(false)).toBe('');
		expect(formatTimeStamp('2025-05-02T99:99:99Z')).toBe('');
		expect(formatTimeStamp('2025-05-02T14:23:00Zsomegarbage')).toBe('');
		expect(formatTimeStamp('2025-05-02T')).toBe('');
		expect(formatTimeStamp(1e40)).toBe('');
		expect(formatTimeStamp([])).toBe('');
		expect(formatTimeStamp({})).toBe('');
			

	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})