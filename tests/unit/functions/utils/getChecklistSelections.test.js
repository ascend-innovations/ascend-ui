import { describe, it, expect } from "vitest";
import { getChecklistSelections } from "$lib";

const functionName = " "

describe(`Tests the operations of ${functionName} with proper inputs`, ()=>{
	it(`Tests ${functionName} using proper input`, ()=> {
		let list = [
			{ valuee: "O1", value: 'Option1', selected: true},
			{ valuee: "O2", value: 'Option2', selected: true},
			{ valuee: "O3", value: 'Option3', selected: true},
			{ valuee: "O4", value: 'Option4', selected: false},
			{ valuee: "O5", value: 'Option5', selected: false},
			{ valuee: "O6", value: 'Option6', selected: false},
			{ valuee: "O7", value: 'Option7', selected: false}]
			expect(getChecklistSelections(list)).toEqual(['Option1', 'Option2', 'Option3'])
			expect(getChecklistSelections(list, 'valuee')).toEqual(['O1', 'O2', 'O3'])
	})
})

describe(`Tests the operations of ${functionName} with inproper inputs`, ()=>{
	it(`Tests ${functionName} using inproper input`, ()=> {
		let list = [
			{ valuee: "O1", value: 'Option1', selected: true},
			{ valuee: "O2", value: 'Option2', selected: true},
			{ valuee: "O3", value: 'Option3', selected: true},
			{ valuee: "O4", value: 'Option4', selected: undefined},
			{ valuee: "O5", value: 'Option5', selected: null},
			{ valuee: "O6", value: 'Option6', selected: ""},
			{ valuee: "O7", value: 'Option8', selected: {}},
			{ valuee: "O7", value: 'Option9', selected: 'hello'},
			{ valuee: "O7", value: 'Option10', selected: 'false'},
			{ valuee: "O7", value: 'Option11', selected: -1},
			{ valuee: "O7", value: 'Option12', selected: 0},
		]
		expect(getChecklistSelections(list)).toEqual(['Option1', 'Option2', 'Option3'])
		expect(getChecklistSelections(list, 'valuee')).toEqual(['O1', 'O2', 'O3'])

		let list2 = []
		expect(getChecklistSelections(list2)).toEqual([])

	})
})

describe(`Tests ${functionName} for additional special cases:`, ()=>{
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
})