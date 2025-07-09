import { describe, it, expect } from "vitest";
import { getIcon } from '$lib'

import {
	AscendLogo,
	MetricsIcon,
	ArrowLeftSmallIcon,
	NeutralExtraSmallIcon,
} from '$lib'

const functionName = "getIcon"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		expect(getIcon('i', 'AscendLogo')).toBe(AscendLogo)
		expect(getIcon('m', 'MetricsIcon')).toBe(MetricsIcon)
		expect(getIcon('s', 'ArrowLeftSmallIcon')).toBe(ArrowLeftSmallIcon)
		expect(getIcon('xs', 'NeutralExtraSmallIcon')).toBe(NeutralExtraSmallIcon)
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		expect(getIcon('m', 'FakeIcon')).toBeUndefined()
		expect(getIcon('fakeSize', 'AscendLogo')).toBeUndefined()
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})