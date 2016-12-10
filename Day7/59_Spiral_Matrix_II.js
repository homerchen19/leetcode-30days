/**
 * Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 *
 * For example,
 * Given n = 3,
 *
 * You should return the following matrix:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 *
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = n => {
  if(n === 0) {
    return [];
  } else if(n === 1) {
    return [[1]];
  }

  let ans = [];
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  let num = 1;

  for(let i = 0; i < n; i++) {
    let tmp = [];

    for(let j = 0; j < n; j++) {
      tmp.push(0);
    }

    ans.push(tmp);
  }

  while(left < right) {
    // left -> right
    for(let i = left; i < right; i++) {
      ans[top][i] = num++;
    }

    // top -> bottom
    for(let i = top; i < bottom; i++) {
      ans[i][right] = num++;
    }

    // right -> left
    for(let i = right; i > left; i--) {
      ans[bottom][i] = num++;
    }

    // bottom -> top
    for(let i = bottom; i > top; i--) {
      ans[i][left] = num++;
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  if(n % 2 === 1) {
    n = Math.floor(n / 2);
    ans[n][n] = num;
  }

  return ans;
};
