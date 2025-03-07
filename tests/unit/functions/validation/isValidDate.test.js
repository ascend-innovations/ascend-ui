import { it, expect, describe } from 'vitest'
import { isValidDate } from '$lib/index.js'

describe('test isValidDate utility', () => {
    it('confirms the validity of a valid date', () => {
        expect(isValidDate('2024-02-21')).toBe(true)
    })

    it('confirms invalid date is invalid', () => {
        expect(isValidDate('12234')).toBe(false)
        expect(isValidDate(1234)).toBe(false)
    })
})