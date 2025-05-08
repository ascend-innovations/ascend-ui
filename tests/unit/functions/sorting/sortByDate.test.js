import { describe, it, expect } from "vitest";
import { sortByDate } from "$lib";

const functionName = "sortByDate";

describe(`Tests the operations of ${functionName} with proper inputs`, () => {
    it(`Tests ${functionName} with 'newest' sortOrder`, () => {
        const input = ["2023-01-01", "2025-01-01", "2024-01-01"];
        expect(sortByDate(input, "newest")).toEqual([
            "2025-01-01",
            "2024-01-01",
            "2023-01-01",
        ]);
    });

    it(`Tests ${functionName} with 'oldest' sortOrder`, () => {
        const input = ["2023-01-01", "2025-01-01", "2024-01-01"];
        expect(sortByDate(input, "oldest")).toEqual([
            "2023-01-01",
            "2024-01-01",
            "2025-01-01",
        ]);
    });
});

describe(`Tests the operations of ${functionName} with improper inputs`, () => {
     it(`Tests ${functionName} with invalid dates`, () => {
        const input = ["invalid-date", "2025-01-01", "2024-01-01"];
        expect(sortByDate(input, "newest")).toEqual([ 'invalid-date', '2025-01-01', '2024-01-01' ]);
     });

    it(`Tests ${functionName} with unsupported sortOrder`, () => {    
        const input = ["2023-01-01", "2025-01-01", "2024-01-01"];
        expect(sortByDate(input, "unsupported")).toEqual(input); // Should return the input unchanged
    });
});

describe(`Tests ${functionName} for additional special cases:`, () => {
    it(`Tests ${functionName} with an empty array`, () => {
        expect(sortByDate([], "newest")).toEqual([]);
    });

    it(`Tests ${functionName} with a single date`, () => {
        const input = ["2023-01-01"];
        expect(sortByDate(input, "newest")).toEqual(["2023-01-01"]);
        expect(sortByDate(input, "oldest")).toEqual(["2023-01-01"]);
    });
});