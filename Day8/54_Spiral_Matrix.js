/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * For example,
 * Given the following matrix:
 *
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * You should return [1,2,3,6,9,8,7,4,5].
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  if(matrix.length === 0) {
    return [];
  }

  let ans = [];
  const m = matrix.length, n = matrix[0].length;
  const layer = Math.floor((Math.min(m, n) + 1) / 2);

  for(let i = 0; i < layer; i++) {
    const lastRow = m - i - 1;
    const lastCol = n - i - 1;

    if(i === lastRow) { // 最後一行
      for(let j = i; j <= lastCol; j++) {
        ans.push(matrix[i][j]);
      }
    } else if(i === lastCol){ // 最後一列
      for(let j = i; j <= lastRow; j++) {
        ans.push(matrix[j][i]);
      }
    } else { // 螺旋式歷遍
      for(let j = i; j < lastCol; j++) {
        ans.push(matrix[i][j]);
      }

      for(let j = i; j < lastRow; j++) {
        ans.push(matrix[j][lastCol]);
      }

      for(let j = lastCol; j > i; j--) {
        ans.push(matrix[lastRow][j]);
      }

      for(let j = lastRow; j > i; j--) {
        ans.push(matrix[j][i]);
      }
    }
  }

  return ans;
};
