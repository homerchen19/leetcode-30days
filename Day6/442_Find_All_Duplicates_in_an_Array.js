/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    const number = Math.abs(nums[i]);
    
    if(nums[number - 1] < 0) {
      ans.push(number);
    } else {
      nums[number - 1] *= -1;
    }
  }

  return ans;
};
