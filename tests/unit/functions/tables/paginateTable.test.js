import { it, expect, describe, beforeAll } from 'vitest'
import { paginateTable } from '$lib/index.js'

let list = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
	{ id: 9 },
	{ id: 10 },
	{ id: 11 },
	{ id: 12 },
	{ id: 13 },
	{ id: 14 },
	{ id: 15 },
	{ id: 16 },
	{ id: 17 },
	{ id: 18 },
	{ id: 19 },
	{ id: 20 },
	{ id: 21 },
	{ id: 22 },
	{ id: 23 },
	{ id: 24 },
]

let pageData = {
	tableData: list,
	pageData: list.slice(0, 10),
	leftIndex: 0,
	rightIndex: 10,
	currentPage: 1,
	totalPages: Math.ceil(list.length / 10),
}

beforeAll(() => {
	pageData = {
		tableData: list,
		pageData: list.slice(0, 10),
		leftIndex: 0,
		rightIndex: 10,
		currentPage: 1,
		totalPages: Math.ceil(list.length / 10),
	}
})

describe('tests paginateTable function', () => {
	it('paginates forward by a default increment of 10', () => {
		pageData = paginateTable(pageData, 'next')
		expect(pageData.leftIndex).toBe(10)
		expect(pageData.rightIndex).toBe(20)
		expect(pageData.currentPage).toBe(2)
		expect(pageData.pageData[0].id).toBe(11)
		expect(pageData.pageData[9].id).toBe(20)
	})

	it('paginates backward by a default increment of 10', () => {
		pageData = paginateTable(pageData, 'previous')
		expect(pageData.leftIndex).toBe(0)
		expect(pageData.rightIndex).toBe(10)
		expect(pageData.currentPage).toBe(1)
	})

	it('paginates forward by a custom increment of 11', () => {
		pageData = {
			tableData: list,
			pageData: list.slice(0, 11),
			leftIndex: 0,
			rightIndex: 11,
			currentPage: 1,
			totalPages: Math.ceil(list.length / 11),
		}
		pageData = paginateTable(pageData, 'next', 11)
		expect(pageData.leftIndex).toBe(11)
		expect(pageData.rightIndex).toBe(22)
		expect(pageData.currentPage).toBe(2)
	})
})
