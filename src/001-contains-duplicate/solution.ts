export const containsDuplicate = (nums: number[]): boolean => {
    const hm = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hm.get(nums[i])) {
            return true
        }

        hm.set(nums[i], (hm.get(nums[i]) || 0) + 1);
    }

    return false
}
