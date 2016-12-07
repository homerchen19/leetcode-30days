/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let num_1, num_2;
  let numbers = [];

  for(let i = 0; i < nums.length; i++) {
    num_1 = nums[i];
    num_2 = target - num_1;

    if(numbers.indexOf(num_2) !== -1) {
      return [numbers.indexOf(num_2), i];
    } else {
      numbers[i] = num_1;
    }
  }
};
