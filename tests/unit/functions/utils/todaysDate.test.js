import { it, expect, describe } from 'vitest'
import { todaysDate } from '$lib/index.js'

describe('tests todaysDate utility', () => {
    it('returns a date in yyyy-mm-dd format', () => {
        expect(todaysDate()[4]).toBe('-')
        expect(todaysDate()[7]).toBe('-')
    })
})