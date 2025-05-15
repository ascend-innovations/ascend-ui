import { describe, it, expect } from "vitest";
import { sortArray } from "$lib";

const functionName = "sortArray";

describe(`Tests the operations of ${functionName} with proper inputs`, () => {
    it(`Tests ${functionName} with numeric values`, () => {
        const input = [
            { number: 3 },
            { number: 1 },
            { number: 2 },
        ];
        expect(sortArray(input, "number", "number", "oldest")).toEqual([
            { number: 3 },
            { number: 2 },
            { number: 1 },
        ]);
        expect(sortArray(input, "number", "number", "newest")).toEqual([
            { number: 1 },
            { number: 2 },
            { number: 3 },
        ]);
    });

    it(`Tests ${functionName} with date values`, () => {
        const input = [
            { date: "2023-01-01" },
            { date: "2025-01-01" },
            { date: "2024-01-01" },
        ];
        expect(sortArray(input, "date", "date", "newest")).toEqual([
            { date: "2023-01-01" },
            { date: "2024-01-01" },
            { date: "2025-01-01" },
        ]);
        expect(sortArray(input, "date", "date", "oldest")).toEqual([
            { date: "2025-01-01" },
            { date: "2024-01-01" },
            { date: "2023-01-01" },
        ]);
    });

    it(`Tests ${functionName} with boolean values`, () => {
        const input = [
            { boolean: true },
            { boolean: false },
            { boolean: true },
        ];
        expect(sortArray(input, "boolean", "boolean", "oldest")).toEqual([
            { boolean: true },
            { boolean: true },
            { boolean: false },
        ]);
        expect(sortArray(input, "boolean", "boolean", "newest")).toEqual([
            { boolean: false },
            { boolean: true },
            { boolean: true },
        ]);
    });

    
	it(`Tests ${functionName} with array values`, () => {
        const input = [
            { array: ["b", "a"] },
            { array: ["c"] },
            { array: ["a", "c"] },
        ];
        expect(sortArray(input, "array", "array", "newest")).toEqual([
            { array: ["c"] },
            { array: ["a", "c"] },
            { array: ["a", "b"] },
        ]);

		expect(sortArray(input, "array", "array", "oldest")).toEqual([
            { array: ["a", "b"] },
            { array: ["a", "c"] },
            { array: ["c"] },
        ]);
    });
	
	it(`Tests ${functionName} with missing columnKey`, () => {
        const input = [{ number: 3 }, { number: 1 }];
        expect(() => (
			(sortArray(input, null, "number", "newest"))
		).toEqual([{ number: 3 }, { number: 1 }]));
    });

    it(`Tests ${functionName} with unsupported columnType`, () => {
        const input = [{ unsupported: "value" }];
        expect(
        	sortArray(input, "unsupported", "unsupportedType", "newest")
        ).toEqual([{ unsupported: "value" }]);
    });
});

describe(`Tests the operations of ${functionName} with improper inputs`, () => {
	it(`Tests ${functionName} for additional special case: [case]:`, ()=>{ //repeat as need.
		true
	})
});