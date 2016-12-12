/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  if(matrix.length === 0) return;

  const m = matrix.length, n = matrix[0].length;
  let emptyRow0 = false, emptyCol0 = false;

  // first row
  for(let i = 0; i < n; i++) {
    if(matrix[0][i] === 0) {
      emptyRow0 = true;
      break;
    }
  }

  // first column
  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      emptyCol0 = true;
      break;
    }
  }

  for(let i = 1; i< m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if(emptyRow0) {
    for(let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if(emptyCol0) {
    for(let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
