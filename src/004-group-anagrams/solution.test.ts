import { expect, test, describe } from "vitest";
import { groupAnagrams } from "./solution.ts";

const sortResult = (groups: string[][]): string[][] =>
    groups.map((g) => [...g].sort()).sort((a, b) => a.length - b.length || a[0].localeCompare(b[0]));

describe("groupAnagrams", () => {
    describe("examples", () => {
        test("groups anagrams for example 1", () => {
            const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
            expect(sortResult(result)).toEqual(
                sortResult([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]),
            );
        });

        test("groups anagrams for example 2", () => {
            const result = groupAnagrams([""]);
            expect(sortResult(result)).toEqual(sortResult([[""]]));
        });

        test("groups anagrams for example 3", () => {
            const result = groupAnagrams(["a"]);
            expect(sortResult(result)).toEqual(sortResult([["a"]]));
        });
    });

    // describe("edge cases", () => {
    //     test("handles all identical strings", () => {
    //         const result = groupAnagrams(["abc", "abc", "abc"]);
    //         expect(sortResult(result)).toEqual(sortResult([["abc", "abc", "abc"]]));
    //     });

    //     test("handles no anagrams", () => {
    //         const result = groupAnagrams(["abc", "def", "ghi"]);
    //         expect(sortResult(result)).toEqual(sortResult([["abc"], ["def"], ["ghi"]]));
    //     });

    //     test("handles single character strings", () => {
    //         const result = groupAnagrams(["a", "b", "a"]);
    //         expect(sortResult(result)).toEqual(sortResult([["a", "a"], ["b"]]));
    //     });
    // });
});
