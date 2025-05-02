import { describe, it, expect } from "vitest";
import { convertToCurrency } from "$lib";

describe("", ()=>{
	it("", ()=>{
		console.log(convertToCurrency(10))
		console.log(convertToCurrency(10, false))

		console.log(convertToCurrency(100000000.4333333))
		console.log(convertToCurrency(100000000.4333333, false))
	})

	it("", ()=>{
		console.log("0")
		expect(() => convertToCurrency({})).toThrowError('Invalid number')
		console.log("1")
		expect(convertToCurrency([], false)).toThrowError('Invalid number')
		console.log("2")
		console.log(convertToCurrency("10", false))
		console.log("3")
		console.log(convertToCurrency("10"))
		console.log("4")
	})

})

