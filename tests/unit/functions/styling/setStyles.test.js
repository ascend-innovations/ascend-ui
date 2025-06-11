// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { setStyles } from '$lib'

describe('setStyles', () => {
	beforeEach(() => {
		// Clean up any previous styles
		document.documentElement.removeAttribute('style')
	})

	it('applies CSS custom properties to :root', () => {
		setStyles({
			'--primary-color': '#ff0000',
			'--font-size': '18px'
		})

		expect(document.documentElement.style.getPropertyValue('--primary-color')).toBe('#ff0000')
		expect(document.documentElement.style.getPropertyValue('--font-size')).toBe('18px')
	})

	it('overwrites existing variables', () => {
		document.documentElement.style.setProperty('--font-size', '12px')

		setStyles({ '--font-size': '30px' })


		expect(document.documentElement.style.getPropertyValue('--font-size')).toBe('30px')
	})
})
