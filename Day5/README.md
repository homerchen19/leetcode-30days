# [Leetcode-5/30][Array] #209 Minimum Size Subarray Sum

## #209 Minimum Size Subarray Sum

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.
```
#### 題目解答：
```javascript
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  if(nums.length === 0) {
    return 0;
  }

  let leftBound = 0, rightBound = 0;
  let sum = nums[0];
  let minLength = Number.MAX_VALUE;

  while(rightBound < nums.length) {
    while(sum < s && rightBound < nums.length) {
      rightBound++;
      sum += nums[rightBound];
    }

    if(sum >= s) {
      minLength = Math.min(minLength, rightBound - leftBound + 1);
      sum -= nums[leftBound];
      leftBound++;
    }
  }

  return minLength > nums.length ? 0 : minLength;
};
```
#### 題目連結：[209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
#### 解題說明：
今天是 `Array` 篇第二天，挑戰的是難度 Medium 的 [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)，  
這題會給 **一個正整數 `s`** 和 **一個陣列 `nums[]`**，而我們要在這個陣列中找出 **元素的和 >= s** 的最小子陣列 `Subarray`，如果找不到的話就回傳 0。  

這題會用到[第二天](https://github.com/xxhomey19/leetcode-30days/tree/master/Day2)運用到的 `Sliding Window`，遇到題目要求 `Sub....` 什麼的，都非常有機會可以用 `Sliding Window` 解決，概念不難但可以運用在很多題目上，那一定要學起來啦～  
#### 解題步驟：
- 步驟 1.  
宣告需要的變數，  
既然要使用 `Sliding Window` ，就先定義窗戶的左邊框 `leftBound` 跟右邊框 `rightBound` 的初始為 0，  
`sum` 是存暫時累加的總和，先將它定義為陣列的第一個值 `nums[0]`，  
最後，`minLength` 是我們要回傳的答案，先暫時將它定義為最大值。  
```javascript
let leftBound = 0, rightBound = 0;
let sum = nums[0];
let minLength = Number.MAX_VALUE;
```
- 步驟 2.  
這步驟就是實作 `Sliding Window` 的部分，最外層的 `while` loop 確保右邊框不會超過陣列的長度，每次迴圈是要去算每次的窗戶的總和、長度，  
裡面得第一個 `while` loop 要做的事情是：**以目前的窗戶一直往右延伸直到 `sum` >= `s`**，  

  接著，`sum` >= `s` 後進入 `if`，取目前窗戶的長度（即 ```rightBound - leftBound + 1```）跟 `minLength` 的最小值，  
  然後把目前窗戶的總和 `sum` 減去一個左邊框的值，然後把左邊框往右移，繼續算下一個窗戶的總和、長度。  

```javascript
while(rightBound < nums.length) {
  while(sum < s && rightBound < nums.length) {
    rightBound++;
    sum += nums[rightBound];
  }

  if(sum >= s) {
    minLength = Math.min(minLength, rightBound - leftBound + 1);
    sum -= nums[leftBound];
    leftBound++;
  }
}
```
- 步驟 3.  
最後，回傳 `minLength`，要注意的是，題目可能會出現 `nums[1, 1]` 但 `s = 3`，顯然我們 `1 + 1` 不可能大於 3，所以我們的 `minLength` 會 **`return Number.MAX_VALUE`**，  
所以我們要檢查如果算出來的 `minLength > nums.length`的話要回傳 0，否則就回傳 `minLength`。  
完成！  
```javascript
return minLength > nums.length ? 0 : minLength;
```
