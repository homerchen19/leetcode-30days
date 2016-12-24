# [Leetcode-22/30][Dynamic Programming] #213 House Robber II

## #213 House Robber II

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const robMax = (start, end, nums) => {
  let dp = [];

  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for(let i = start + 2; i < end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[end - 1];
};

const rob = nums => {
  const len = nums.length;
  if(len === 0) {
    return 0;
  } else if(len === 1) {
    return nums[0];
  }

  return Math.max(robMax(0, len - 1, nums), robMax(1, len, nums));
};
```
#### 題目連結：[213. House Robber II](https://leetcode.com/problems/house-robber-ii/)
#### 解題說明：
進入第 22 天！是我最期待的 **`Dynamic Programming`** 篇的開始～  

先來簡單說明 `動態規劃 Dynamic Programming` 是什麼碗糕，  
在說明前 `動態規劃 Dynamic Programming` 前，相信大家都知道 `Divide and Conquer` 的概念，那其實 `動態規劃` 就是在 `Divide and Conquer` 所切割出來的小問題中，記錄下重複出現的狀態，以節省重複計算的時間，有點類似 `快取 Cache` 的概念，以空間換取時間，  
更多詳細資訊請點[這裡](http://emn178.pixnet.net/blog/post/89039215-%E5%8B%95%E6%85%8B%E8%A6%8F%E5%8A%83(dynamic-programming))。  

那今天第一天就來練習有點難度的 [213. House Robber II](https://leetcode.com/problems/house-robber-ii/)， 這題中文叫 "打家劫舍"，蠻有趣的哈哈，  
我們在題目要去某個社區當搶劫犯，規則是我們不能連續搶兩間房子，否則會觸動警鈴被抓，  
還有另一個規則是，這個社區的房子是環狀的，意思是**我們不能同時搶第一間跟最後一間**，否則會因為這兩間相鄰而觸動警鈴，  
題目傳進來的陣列 `nums` 則代表每一間房子藏有的金錢數目，題目要我們算出我們最多能搶走多少錢，  

我們用 DP 來解這題，詳細解題會在下面說明～  

#### 解題步驟：
- 步驟 1.  
這裡我們先預防整個社區有 0 間或 1 間哈哈，  
主要計算的地方在 `robMax`，  
因為整個社區是環狀的，所以我們可以試想，其實只有兩種搶法，  
1. **第 0 間跳著搶到 第 n - 1 間**
2. **從第 1 間跳著搶到第 n 間**

   所以我們傳給 `robMax` 的參數才是 **0 搭配 (len - 1)** 跟 **1 搭配 len**，答案就是比較這兩種搶法誰搶的比較多那個數字。  

```javascript
const rob = nums => {
  const len = nums.length;
  if(len === 0) {
    return 0;
  } else if(len === 1) {
    return nums[0];
  }

  return Math.max(robMax(0, len - 1, nums), robMax(1, len, nums));
};
```  
- 步驟 2.  
這裡就是主要計算 DP 的地方囉，
首先，通常我們會宣告 `dp = []`，然後放入初始值，  
然後我們從 `start + 2` 開始跑迴圈，每次都比較 `dp[i - 1]` 跟 `dp[i - 2] + nums[i]` 誰比較大，原因是因為不能去到相鄰的房子，並把它存在 `dp[i]` 裡，下次迴圈有人用到這個 `dp[i]` 時，就能馬上知道**走到這間房子已經能搶到多少錢了**，  
最後我們回傳 `dp[end - 1]` 即可，  
完成！  

```javascript
const robMax = (start, end, nums) => {
  let dp = [];

  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for(let i = start + 2; i < end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[end - 1];
};
```
