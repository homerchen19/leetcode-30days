# [Leetcode-24/30][Dynamic Programming] #377 Combination Sum IV

## #377 Combination Sum IV

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
  let dp = [];

  for(let i = 0; i <= target; i++) {
    dp.push(0);
  }
  dp[0] = 1;

  for(let i = 0; i <= target; i++) {
    nums.forEach(num => {
      if(i + num <= target) {
        dp[i + num] += dp[i];
      }
    });
  }

  return dp[target];
};
```
#### 題目連結：[377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
#### 解題說明：
進入第 24 天～是 `Dynamic Programming` 的最後一篇了ＱＱ  

今天的題目也是標準 DP 題，其實仔細一看，會發現根本是[昨天換零錢題](https://github.com/xxhomey19/leetcode-30days/tree/master/Day23)的簡單版！  
題目給我們一組數字陣列（各種面額的零錢）和一個數字（總金額），要我們找出**有幾種方法可以用這些數字湊出這個數字**，  
是不是超級簡單的呢～跟[找零錢題](https://github.com/xxhomey19/leetcode-30days/tree/master/Day23)根本一模一樣啊～  


#### 解題步驟：
- 步驟 1.  
我們一樣先初始化 `dp[]`，裡面先全部塞 `0` 進去，要注意這個初始化的 `for` loop 是一定要做的，因為一開始只是宣告一個空陣列 `dp[]`的長度是 `0`，如果不塞東西進去而直接 assign 值進去會超出陣列大小而變成 `NaN`，  

  初始完後，下面的 `for` loop 就是單純跑 DP 的地方，用 `dp[i]` 去控制數字總和，  
  我們用到 [`Array.forEach()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 這個方式去迭代 `Array`，算是一個比較方便的寫法，當然用 `for` loop 去迭代也是沒問題的～  

  最後回傳 `dp[target]` 就可以囉～  
  完成！  

```javascript
const combinationSum4 = (nums, target) => {
  let dp = [];

  for(let i = 0; i <= target; i++) {
    dp.push(0);
  }
  dp[0] = 1;

  for(let i = 0; i <= target; i++) {
    nums.forEach(num => {
      if(i + num <= target) {
        dp[i + num] += dp[i];
      }
    });
  }

  return dp[target];
};
```
