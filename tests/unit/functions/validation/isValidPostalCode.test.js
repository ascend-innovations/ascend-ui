import { it, expect, describe } from 'vitest'
import { isValidZipCode } from '$lib/index.js'

describe('test isValidZipCode utility', () => {
	it('returns true for valid zip code', () => {
		expect(isValidZipCode('43210')).toBe(true)
		expect(isValidZipCode('12345-0091')).toBe(true)
	})

	it('returns false for invalid zip code', () => {
		expect(isValidZipCode('0000')).toBe(false)
		expect(isValidZipCode('fewas')).toBe(false)
		expect(isValidZipCode(12345)).toBe(false)
	})
})
