import { describe, it, expect } from "vitest";
import { convertToCurrency } from "$lib";

describe("Tests correct operation of convertToCurrency", ()=>{
	it("Tests operation of convertToCurrency given valid input", ()=>{
		expect(convertToCurrency(10)).toBe("$10.00")
		expect(convertToCurrency(10, false)).toBe("$10")

		expect(convertToCurrency(0)).toBe("$0.00")
		expect(convertToCurrency(0, false)).toBe("$0")

		expect(convertToCurrency(100000000.4333333)).toBe("$100,000,000.43")
		expect(convertToCurrency(100000000.4333333, false)).toBe("$100,000,000")
		
		expect(convertToCurrency(-10)).toBe("$-10.00")
		expect(convertToCurrency(-10, false)).toBe("$-10")
	})

	it("Tests operation of convertToCurrency given invalid input", ()=>{		
		expect(() => convertToCurrency({})).toThrowError('Invalid number')
		expect(convertToCurrency([], false)).toBe("$0") 
		expect(() => convertToCurrency("abcdefghijklmno")).toThrowError('Invalid number')
		expect(convertToCurrency("10", false)).toBe("$10")
		expect(convertToCurrency("10")).toBe("$10.00")
		expect(convertToCurrency(-0)).toBe("$0.00")
		expect(convertToCurrency(-0, false)).toBe("$0")
	})

})

