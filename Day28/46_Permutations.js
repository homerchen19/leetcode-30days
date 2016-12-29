/**
 * Given a collection of distinct numbers, return all possible permutations.
 *
 * For example,
 * [1,2,3] have the following permutations:
 *
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  let result = [];
  result.push([nums[0]]);

  for(let i = 1; i < nums.length; i++) {
    let newResult = [];

    for(let j = 0; j < result.length; j++) {
      for(let m = 0; m <= i; m++) {
        let list = result[j].slice();
        list.splice(m, 0, nums[i]);
        newResult.push(list);
      }
    }

    result = newResult;
  }

  return result;
};
