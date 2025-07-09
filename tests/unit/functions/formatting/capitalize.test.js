import {describe, it, expect} from "vitest"
import captitalize from "$lib/functions/formatting/capitalize"

describe("Test the functionality of capitalize", () =>{
	it("tests function of capitalize under proper conditions", ()=>{
		expect(captitalize("test")).toBe("Test")
		expect(captitalize("test this")).toBe("Test this")
		expect(captitalize("test this super really very long sentance. that just keeps going. what am I ever going to look like lorem ipsum really coool test written by collin ferguson at ascend that just keeps on going and gooing like a cool novel or something. you know what I mean jelly bean?"))
			.toBe("Test this super really very long sentance. that just keeps going. what am I ever going to look like lorem ipsum really coool test written by collin ferguson at ascend that just keeps on going and gooing like a cool novel or something. you know what I mean jelly bean?")
	})

	it("tests function of capitalize under improper conditions", ()=>{
		expect(captitalize("")).toBe("")
		expect(captitalize(null)).toBe(null)
		expect(captitalize([])).toStrictEqual([])
		expect(captitalize({})).toStrictEqual({})
		expect(captitalize({foo:"bar",bar:"foo"})).toStrictEqual({foo:"bar",bar:"foo"})
	})

})