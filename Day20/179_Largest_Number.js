/**
 * Given a list of non negative integers, arrange them such that they form the largest number.
 *
 * For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 *
 * Note: The result may be very large, so you need to return a string instead of an integer.
 * 
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = nums => {
  nums.sort((a, b) => {
    return ('' + a + b) > ('' + b + a) ? -1 : 1;
  });

  const result = nums.join('');

  return result[0] === '0' ? '0' : result;
};
