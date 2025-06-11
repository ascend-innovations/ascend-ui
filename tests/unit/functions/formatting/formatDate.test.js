import { describe, it, expect } from "vitest";
import { formatDate } from "$lib";


describe("Tests the operation of formatDate", ()=>{
	it("Tests the operation of formatDate given valid input", ()=>{
		expect(formatDate("5/2/2025")).toBe("05/02/25")

		expect(formatDate("5/2/2025", true)).toBe("05/02/2025")

		expect(formatDate("2025-5-2")).toBe("05/02/25")
		expect(formatDate("2025-5-2", true)).toBe("05/02/2025")

		expect(formatDate('2025-05-02 00:00:00')).toBe("05/02/25")
		expect(formatDate('2025-05-02 00:00:00', true)).toBe("05/02/2025")
		expect(formatDate(10)).toBe("12/31/69") // date may be returned as an int. Otherwise I would block this.
	})

	it("Tests the operation of formatDate given valid input", ()=>{
		expect(formatDate('2025-02-30')).toBe("03/01/25")
		expect(formatDate('2025-02-31')).toBe("03/02/25")
		expect(formatDate('2025/05/02')).toBe("05/02/25")
		expect(formatDate('2025-05-02T10:00:00')).toBe("05/02/25")
		expect(formatDate('2025-02-56')).toBe("Invalid Date")
		expect(formatDate('2025-02-756')).toBe("Invalid Date")
		expect(formatDate('2025-13-01')).toBe("Invalid Date")
		expect(formatDate('2025-05-02 25:00:00')).toBe("Invalid Date")
		expect(formatDate([])).toBe("Invalid Date")
		expect(formatDate({})).toBe("Invalid Date")
		expect(formatDate('')).toBe("Invalid Date")
		expect(formatDate("abc, def")).toBe("Invalid Date")
	})
	
})

