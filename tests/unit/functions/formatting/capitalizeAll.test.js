import {describe, it, expect} from "vitest"
import captitalizeAll from "$lib/functions/formatting/capitalizeAll"

describe("Test the functionality of capitalizeAll", () =>{
	it("tests function of capitalizeAll under proper conditions", ()=>{
		expect(captitalizeAll("test")).toBe("Test")
		expect(captitalizeAll("test this")).toBe("Test This")
		expect(captitalizeAll("test this super really very long sentance. that just keeps going. what am I ever going to look like lorem ipsum really coool test written by collin ferguson at ascend that just keeps on going and gooing like a cool novel or something. you know what I mean jelly bean?"))
			.toBe("Test This Super Really Very Long Sentance. That Just Keeps Going. What Am I Ever Going To Look Like Lorem Ipsum Really Coool Test Written By Collin Ferguson At Ascend That Just Keeps On Going And Gooing Like A Cool Novel Or Something. You Know What I Mean Jelly Bean?")
		
	})

	it("tests function of capitalizeAll under improper conditions", ()=>{
		expect(captitalizeAll("")).toBe("")
		expect(captitalizeAll("")).toBe("")
		expect(captitalizeAll(null)).toBe(null)
		expect(captitalizeAll([])).toStrictEqual([])
		expect(captitalizeAll({})).toStrictEqual({})
		expect(captitalizeAll({foo:"bar",bar:"foo"})).toStrictEqual({foo:"bar",bar:"foo"})
	})

})
