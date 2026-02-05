import { expect, test, describe } from "vitest";
import { twoSum } from "./solution.ts";

const expectPair = (result: number[], expected: number[]) => {
    expect(result.length).toBe(2);
    expect(result[0]).not.toBe(result[1]);
    expect([...result].sort((a, b) => a - b)).toEqual(
        [...expected].sort((a, b) => a - b),
    );
};

describe("twoSum", () => {
    describe("examples", () => {
        test("returns indices for example 1", () => {
            expectPair(twoSum([2, 7, 11, 15], 9), [0, 1]);
        });

        test("returns indices for example 2", () => {
            expectPair(twoSum([3, 2, 4], 6), [1, 2]);
        });

        test("returns indices for example 3", () => {
            expectPair(twoSum([3, 3], 6), [0, 1]);
        });
    });

    describe("edge cases", () => {
        test("handles minimal length array", () => {
            expectPair(twoSum([1, 2], 3), [0, 1]);
        });

        test("handles zero target with duplicates", () => {
            expectPair(twoSum([0, 4, 3, 0], 0), [0, 3]);
        });

        test("handles negative numbers", () => {
            expectPair(twoSum([-1, -2, -3, -4, -5], -8), [2, 4]);
        });
    });
});
