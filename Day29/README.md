# [Leetcode-29/30][Combinations] #77 Combinations

## #77 Combinations

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
#### 題目解答：
```javascript
/**
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
```
#### 題目連結：[77. Combinations](https://leetcode.com/problems/combinations/)
#### 解題說明：
倒數第二天！先祝大家 2017 年快樂啊～～  
[昨天寫排列](https://github.com/xxhomey19/leetcode-30days/tree/master/Day28)，那今天就來寫 **組合** [77. Combinations](https://leetcode.com/problems/combinations/) 吧～  

這個組合也是跟高中數學教的組合一樣，題目給一個 `n` 跟一個  `k`，代表**我們要用數字 `1 ~ n` 去組合長度為 `k` 的所有可能**，  
我們用 **DFS** 去解這題！  

#### 解題步驟：
- 步驟 1.  
我們直接講解 `dfs` 這個涵式，  

  我們的思路是，一次多放一個數字進 `curArr` 以達到 **組合** 的效果，  
  並且是先從 **`start = 1`** 開始每次去跑 `for` loop，也就是說，每次能加進去的數字 `i` 就會被限制在 `start ~ n` 之間，以此從小到大去組合作為避免會重複算到的機制，  

  記得每次 `push` 一個數字進去就要 `pop` 回來，這樣才能組合出各種可能～  
  完成！  

```javascript
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
```  
