/**
 * Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.
 *
 * Example:
 *
 * nums = [1, 2, 3]
 * target = 4
 *
 * The possible combination ways are:
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 *
 * Note that different sequences are counted as different combinations.
 *
 * Therefore the output is 7.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
  let dp = [];

  for(let i = 0; i <= target; i++) {
    dp.push(0);
  }
  dp[0] = 1;

  for(let i = 0; i <= target; i++) {
    nums.forEach(num => {
      if(i + num <= target) {
        dp[i + num] += dp[i];
      }
    });
  }

  return dp[target];
};
