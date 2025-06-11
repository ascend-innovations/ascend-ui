import { describe, it, expect } from 'vitest'
import { getGlobalColorPalette } from '$lib'

const functionName = "getGlobalColorPalette"

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it('returns the expected color palette object', () => {
		const palette = getGlobalColorPalette()

		// Check that all expected keys exist
		expect(Object.keys(palette)).toEqual([
			'background',
			'error',
			'info',
			'neutral',
			'neutralLight',
			'neutralTrans',
			'primary',
			'primaryTrans',
			'secondary',
			'secondaryTrans',
			'success',
			'tertiary',
			'warning',
			'white',
			'whiteTrans',
		])
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		true
	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})
