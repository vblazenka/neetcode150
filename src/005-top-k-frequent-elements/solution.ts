export const topKFrequent = (nums: number[], k: number): number[] => {
  const hm = new Map();

  for (let i = 0; i < nums.length; i++) {
    hm.set(nums[i], (hm.get(nums[i]) || 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of hm) {
    buckets[freq].push(num);
  }

  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result;
};
