import { it, expect, describe } from 'vitest'
import { isValidEmail } from '$lib/index.js'

describe('tests isValidEmail utility', () => {
	it('returns true for valid email', () => {
		expect(isValidEmail('example@email.com')).toBe(true)
		expect(isValidEmail('example-one@email.com')).toBe(true)
		expect(isValidEmail('example@ascend-innovations.com')).toBe(true)
		expect(isValidEmail('example-one@ascend-innovations.com')).toBe(true)
	})

	it('returns false for invalid email', () => {
		expect(isValidEmail('example.com')).toBe(false)
		expect(isValidEmail('test')).toBe(false)
	})
})
