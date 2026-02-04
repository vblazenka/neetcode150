import { expect, test, describe } from "vitest";
import { isAnagram } from "./solution.ts";

describe("isAnagram", () => {
    describe("edge cases", () => {
        test("returns true for empty strings", () => {
            expect(isAnagram("", "")).toBe(true);
        });

        test("returns true for single character (same)", () => {
            expect(isAnagram("a", "a")).toBe(true);
        });

        test("returns false for single character (different)", () => {
            expect(isAnagram("a", "b")).toBe(false);
        });
    });

    describe("length mismatch", () => {
        test("returns false for different lengths", () => {
            expect(isAnagram("ab", "abc")).toBe(false);
        });

        test("returns false when one is empty and one is not", () => {
            expect(isAnagram("", "a")).toBe(false);
        });
    });

    describe("valid anagrams", () => {
        test("returns true for identical strings", () => {
            expect(isAnagram("hello", "hello")).toBe(true);
        });

        test("returns true for all same characters", () => {
            expect(isAnagram("aaa", "aaa")).toBe(true);
        });

        test("returns true for classic anagram example", () => {
            expect(isAnagram("anagram", "nagaram")).toBe(true);
        });

        test("returns true for anagram (vedran/nardev)", () => {
            expect(isAnagram("vedran", "nardev")).toBe(true);
        });

        test("returns true for anagram (racecar/carrace)", () => {
            expect(isAnagram("racecar", "carrace")).toBe(true);
        });
    });

    describe("invalid anagrams", () => {
        test("returns false for same chars with different counts", () => {
            expect(isAnagram("aab", "abb")).toBe(false);
        });

        test("returns false for classic non-anagram example", () => {
            expect(isAnagram("rat", "car")).toBe(false);
        });

        test("returns false for non-anagram (car/cat)", () => {
            expect(isAnagram("car", "cat")).toBe(false);
        });

        test("returns false for case-sensitive mismatch", () => {
            expect(isAnagram("Ab", "aB")).toBe(false);
        });
    });
});
