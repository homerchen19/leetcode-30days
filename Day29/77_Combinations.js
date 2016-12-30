/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 * For example,
 * If n = 4 and k = 2, a solution is:
 *
 * [
 *   [2,4],
 *   [3,4],
 *   [2,3],
 *   [1,2],
 *   [1,3],
 *   [1,4],
 * ]
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const dfs = (start, n, k, curArr, result) => {
  if(curArr.length === k) {
    result.push(curArr);
    return;
  }

  for(let i = start; i <= n; i++) {
    curArr.push(i);
    dfs(i + 1, n, k, curArr.concat(), result);
    curArr.pop();
  }
};

const combine = (n, k) => {
  let result = [];

  dfs(1, n, k, [], result);

  return result;
};
