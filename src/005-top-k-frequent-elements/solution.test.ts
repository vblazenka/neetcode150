import { expect, test, describe } from "vitest";
import { topKFrequent } from "./solution.ts";

describe("topKFrequent", () => {
    describe("examples", () => {
        test("returns top 2 frequent elements", () => {
            const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
            expect(result.sort()).toEqual([1, 2]);
        });

        test("returns single element", () => {
            const result = topKFrequent([1], 1);
            expect(result.sort()).toEqual([1]);
        });

        test("returns single element", () => {
            const result = topKFrequent([7, 7], 1);
            expect(result.sort()).toEqual([7]);
        });
    });

    describe("edge cases", () => {
        test("handles all same frequency with k equal to unique count", () => {
            const result = topKFrequent([1, 2, 3], 3);
            expect(result.sort()).toEqual([1, 2, 3]);
        });

        test("handles negative numbers", () => {
            const result = topKFrequent([-1, -1, 2, 2, 3], 2);
            expect(result.sort()).toEqual([-1, 2]);
        });

        test("handles single dominant element", () => {
            const result = topKFrequent([1, 1, 1, 2, 3, 4], 1);
            expect(result).toEqual([1]);
        });
    });
});
