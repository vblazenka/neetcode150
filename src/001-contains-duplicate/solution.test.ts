import { expect, test, describe } from "vitest";
import { containsDuplicate } from "./solution.ts";

describe("containsDuplicate", () => {
    describe("examples", () => {
        test("returns true when duplicate exists", () => {
            expect(containsDuplicate([1, 2, 3, 3])).toBe(true);
        });

        test("returns true when duplicate exists", () => {
            expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        });

        test("returns false when all elements are distinct", () => {
            expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
        });

        test("returns true for multiple duplicates", () => {
            expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
        });
    });

    describe("edge cases", () => {
        test("returns false for single element", () => {
            expect(containsDuplicate([1])).toBe(false);
        });

        test("returns true for two identical elements", () => {
            expect(containsDuplicate([1, 1])).toBe(true);
        });

        test("returns false for two different elements", () => {
            expect(containsDuplicate([1, 2])).toBe(false);
        });

        test("handles negative numbers", () => {
            expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
        });
    });
});
