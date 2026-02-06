# Group Anagrams

## Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

## Examples

### Example 1

**Input:** `strs = ["eat","tea","tan","ate","nat","bat"]`

**Output:** `[["bat"],["nat","tan"],["ate","eat","tea"]]`

### Example 2

**Input:** `strs = [""]`

**Output:** `[[""]]`

### Example 3

**Input:** `strs = ["a"]`

**Output:** `[["a"]]`

## Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.
