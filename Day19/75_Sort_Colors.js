/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let red = 0, white = 0, blue = 0;

  for(let i = 0; i < nums.length; i++) {
    switch(nums[i]) {
      case 0:
        red++;
        break;
      case 1:
        white++;
        break;
      case 2:
        blue++;
        break;
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if(red > 0) {
      nums[i] = 0;
      red--;
    } else if(white > 0) {
      nums[i] = 1;
      white--;
    } else if(blue > 0) {
      nums[i] = 2;
      blue--;
    }
  }
};
