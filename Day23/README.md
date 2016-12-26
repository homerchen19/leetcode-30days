# [Leetcode-23/30][Dynamic Programming] #322 Coin Change

## #322 Coin Change

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  let dp = [];

  for(let i = 0; i <= amount; i++) {
    dp.push(Number.MAX_VALUE);
  }

  dp[0] = 0;

  for(let i = 0; i < coins.length; i++) {
    for(let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
```
#### 題目連結：[322. Coin Change](https://leetcode.com/problems/coin-change/)
#### 解題說明：
進入第 23 天！倒數一個禮拜囉～  

今天的題目是經典的 DP 題，**換零錢題 [322. Coin Change](https://leetcode.com/problems/coin-change/)**，  
題目會給我一個 **有不同面值的硬幣陣列** 跟 **我們要換的金額數量**，然後要我們**用最少的硬幣數量來換出總金額數量**，如果換不出來就回傳 `-1`，  

好的，只要遇到這種要找最少、最大的數量都有可能用 DP 解決，詳細解題步驟請繼續看下去～  

#### 解題步驟：
- 步驟 1.  
我們先初始化 `dp[amount + 1]`，這個陣列是用來存 `0 ~ amount` 間每個金額的最小硬幣組合數量，  
先放一個最大的數字進去，然後把第一個 `dp[0]` 初始化為 `0`。  

```javascript
let dp = [];

for(let i = 0; i <= amount; i++) {
  dp.push(Number.MAX_VALUE);
}

dp[0] = 0;
```  
- 步驟 2.  
這裡就是主要計算 DP 的地方，
最主要是最裡面的那行 `dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);`，這行的意思是，比較 `dp[j]` 跟 `dp[j - coins[i]] + 1` 的最小值，  
前者很明顯是當前 `dp[j]` 的組合數量，而後者是 **(當前 `dp[j]` 的組合數量 - 某面額) 後再加 1 ** 的面額組合數量，  

而最外層兩個 `for` loop 只是用來歷遍總金額數量跟所有面額硬幣而已，  
最後，判斷 `dp[amount]` 有沒有辦法被換錢，不行的話回傳 `-1`，否則回傳 `dp[amount]`，  
完成！  

```javascript
for(let i = 0; i < coins.length; i++) {
  for(let j = coins[i]; j <= amount; j++) {
    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  }
}

return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
```
