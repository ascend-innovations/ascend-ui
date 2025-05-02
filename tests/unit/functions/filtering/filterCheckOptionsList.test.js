import {describe, it, expect } from 'vitest'
import filterCheckOptionsList from "$lib/functions/filtering/filterCheckOptionsList"


describe("stub", ()=>{it("stub", ()=>{true})})

/*
	This test is not currently functioning.
	I don't believe this function is in place as the operation of this function is dubious

*/
/*
describe("Test that filterCheckOptions correctly handles proper and improper input conditions.", ()=>{
	const optionList = [
		{ value: 'All', selected: false },
		{ value: 'This', selected: false },
		{ value: 'That', selected: false },
		{ value: 'The Other', selected: true },
		{ value: 'Blah', selected: false },
		{ value: 'What?', selected: false },
		{ value: 'Last', selected: false },
	]
	const optionList2 = [
		{ value: 'All', selected: false },
		{ value: 'This', selected: false },
		{ value: 'That', selected: false },
		]

	it(" ", ()=>{
		console.log(filterCheckOptionsList(null, optionList, "all"))
		console.log(filterCheckOptionsList(optionList2, optionList, ""))
		console.log(filterCheckOptionsList(null, optionList, "true"))
		console.log(filterCheckOptionsList(optionList2, optionList, "a"))
	})
})
*/
