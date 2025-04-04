import { it, expect, describe } from 'vitest'
import { hexToRGB } from '$lib/index.js'

describe('tests hexToRGB utility', () => {
	it('returns rgb value for white', () => {
		expect(hexToRGB('#ffffff')).toBe('rgb(255, 255, 255)')
	})

	it('returns rgb value for black', () => {
		expect(hexToRGB('#000000')).toBe('rgb(0, 0, 0)')
	})

	it('returns rgba value for fully transparent white', () => {
		expect(hexToRGB('#000000', 0)).toBe('rgba(0, 0, 0, 0)')
	})

	it('returns rgba value for 50% transparency', () => {
		expect(hexToRGB('#000000', 0.5)).toBe('rgba(0, 0, 0, 0.5)')
	})

	it('returns rgb value for Ascends primary base shade', () => {
		expect(hexToRGB('#ffd449')).toBe('rgb(255, 212, 73)')
	})
})
