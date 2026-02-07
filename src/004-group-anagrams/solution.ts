// O(m+n)
export const groupAnagrams = (strs: string[]): string[][] => {
    const hm = new Map();

    for (let i = 0; i < strs.length; i++) {
        const freq = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j++) {
            freq[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
        }

        const key = freq.join(',')

        if (!hm.has(key)) {
            hm.set(key, [])
        }

        hm.get(key).push(strs[i])
    }

    return Array.from(hm.values())
}

// Solution of O(m*nlogn) time complexity
// export const groupAnagrams = (strs: string[]): string[][] => {
//     const hm = new Map();

//     for (let i = 0; i < strs.length; i++) {
//         const key = Array.from(strs[i]).sort().join("");

//         if (!hm.has(key)) {
//             hm.set(key, [])
//         }

//         hm.get(key).push(strs[i])
//     }

//     return Array.from(hm.values())
// }