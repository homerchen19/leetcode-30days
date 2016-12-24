/**
 * Note: This is an extension of House Robber.
 *
 * After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
const robMax = (start, end, nums) => {
  let dp = [];

  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for(let i = start + 2; i < end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[end - 1];
};

const rob = nums => {
  const len = nums.length;
  if(len === 0) {
    return 0;
  } else if(len === 1) {
    return nums[0];
  }

  return Math.max(robMax(0, len - 1, nums), robMax(1, len, nums));
};
