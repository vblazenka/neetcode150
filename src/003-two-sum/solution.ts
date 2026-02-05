export const twoSum = (nums: number[], target: number): number[] | undefined => {
    const hm = new Map();

    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (hm.has(diff)) {
            return [hm.get(diff), i]
        } else {
            hm.set(nums[i], i)
        }
    }
};
