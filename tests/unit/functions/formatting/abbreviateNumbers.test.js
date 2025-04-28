import { it, expect, describe } from 'vitest'
import { abbreviateNumber } from '$lib'

describe("Test that numbers are properly abbreviated nulls are handled properly.", () => {
    it('Tests abbreviate function with proper input', () =>{
        expect(abbreviateNumber(1000, 1000)).toBe("1.0K")
        expect(abbreviateNumber(2000, 1000)).toBe("2.0K")
        
        expect(abbreviateNumber(1000)).toBe("1,000")
        expect(abbreviateNumber(2000)).toBe("2,000")

        expect(abbreviateNumber(10000)).toBe("10.0K")
        expect(abbreviateNumber(20000)).toBe("20.0K")

        expect(abbreviateNumber(1000000)).toBe("1.0M")
        expect(abbreviateNumber(2000000)).toBe("2.0M")

        expect(abbreviateNumber(10000000)).toBe("10.0M")
        expect(abbreviateNumber(20000000)).toBe("20.0M")

        expect(abbreviateNumber(1000000000)).toBe("1.0B")
        expect(abbreviateNumber(2000000000)).toBe("2.0B")

        expect(abbreviateNumber(10000000000)).toBe("10.0B")
        expect(abbreviateNumber(20000000000)).toBe("20.0B")

        expect(abbreviateNumber(1000000000000)).toBe("1.0T")
        expect(abbreviateNumber(2000000000000)).toBe("2.0T")

        expect(abbreviateNumber(10000000000000)).toBe("10.0T")
        expect(abbreviateNumber(20000000000000)).toBe("20.0T")

        expect(abbreviateNumber(100000000000000)).toBe("100.0T")
        expect(abbreviateNumber(200000000000000)).toBe("200.0T")
    })

    it('Tests abbreviate function with null values', () =>{
        expect(abbreviateNumber()).toBe('0')
        expect(abbreviateNumber(null)).toBe('0')
        expect(abbreviateNumber(undefined)).toBe('0')
    })
    
    it('Tests abbreviate function with less than 1000', () =>{
        expect(abbreviateNumber(100)).toBe('100')
        expect(abbreviateNumber(99)).toBe('99')
        expect(abbreviateNumber(10)).toBe("10")
        expect(abbreviateNumber(-10)).toBe("-10")
        expect(abbreviateNumber(-100)).toBe("-100")
        expect(abbreviateNumber(-1000)).toBe("-1,000")
    })   

    it('Tests abbreviate function with strings', () =>{
        expect(abbreviateNumber("100")).toBe("100")
        expect(abbreviateNumber("1000")).toBe("1,000")
        expect(abbreviateNumber("100000")).toBe("100.0K")

    })     
})