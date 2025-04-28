import { it, expect, describe } from 'vitest'
import { convertDBDateToJSDate } from "$lib";

describe('test convert date utility', () => {
    it('returns proper date on proper input', () => {
        expect(convertDBDateToJSDate('2025-04-08')).toBe("4/7/2025")
        expect(convertDBDateToJSDate('2025-12-08')).toBe("12/7/2025")
    })
    it('returns proper date on proper input', () => {
        expect(convertDBDateToJSDate('')).toBe("//")
        expect(convertDBDateToJSDate('2025-04-08')).toBe("4/7/2025")
    })
})

