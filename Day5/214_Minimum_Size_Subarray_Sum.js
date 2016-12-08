/**
 * Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 * For example, given the array [2,3,1,2,4,3] and s = 7,
 * the subarray [4,3] has the minimal length under the problem constraint.
 * click to show more practice.
 * More practice:
 * If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 *
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  if(nums.length === 0) {
    return 0;
  }

  let leftBound = 0, rightBound = 0;
  let sum = nums[0];
  let minLength = Number.MAX_VALUE;

  while(rightBound < nums.length) {
    while(sum < s && rightBound < nums.length) {
      rightBound++;
      sum += nums[rightBound];
    }

    if(sum >= s) {
      minLength = Math.min(minLength, rightBound - leftBound + 1);
      sum -= nums[leftBound];
      leftBound++;
    }
  }

  return minLength > nums.length ? 0 : minLength;
};
