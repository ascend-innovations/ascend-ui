import { describe, it, expect } from "vitest";
import { sortTable } from "$lib";

const functionName = "sortTable";

describe(`Tests the operations of ${functionName} with proper inputs`, () => {
    it(`Tests ${functionName} with numeric values`, () => {
        const list = [
            { number: 3 },
            { number: 1 },
            { number: 2 },
        ];
        const sortMap = { number: "oldest" };

        const result = sortTable("number", "number", list, sortMap);

        expect(result).toEqual([
            { number: 1 },
            { number: 2 },
            { number: 3 },
        ]);
        expect(sortMap).toEqual({ number: "newest" });
    });

    it(`Tests ${functionName} with date values`, () => {
        const list = [
            { date: "2023-01-01" },
            { date: "2025-01-01" },
            { date: "2024-01-01" },
        ];
        const sortMap = { date: "newest" };

        const result = sortTable("date", "date", list, sortMap);

        expect(result).toEqual([
            { date: "2025-01-01" },
            { date: "2024-01-01" },
            { date: "2023-01-01" },
        ]);
        expect(sortMap).toEqual({ date: "oldest" });
    });
});

describe(`Tests the operations of ${functionName} with improper inputs`, () => {
    it(`Tests ${functionName} with missing columnKey`, () => {
        const list = [{ number: 3 }, { number: 1 }];
        const sortMap = { number: "oldest" };

        expect(sortTable(null, "number", list, sortMap)).toEqual([{ number: 3 }, { number: 1 }]); //remain unsorted
    });

    it(`Tests ${functionName} with unsupported columnType`, () => {
        const list = [{ unsupported: "value" }];
        const sortMap = { unsupported: "newest" };

        const result = sortTable("unsupported", "unsupportedType", list, sortMap);

        expect(result).toEqual(list); // Should return the list unchanged
    });
});

describe(`Tests ${functionName} for additional special cases:`, () => {
    it(`Tests ${functionName} with an empty list`, () => {
        const list = [];
        const sortMap = { number: "oldest" };

        const result = sortTable("number", "number", list, sortMap);

        expect(result).toEqual([]);
        expect(sortMap).toEqual({ number: "newest" });
    });

    it(`Tests ${functionName} with a single item in the list`, () => {
        const list = [{ number: 1 }];
        const sortMap = { number: "oldest" };

        const result = sortTable("number", "number", list, sortMap);

        expect(result).toEqual([{ number: 1 }]);
        expect(sortMap).toEqual({ number: "newest" });
    });
});