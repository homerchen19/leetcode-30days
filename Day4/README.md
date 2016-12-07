# [Leetcode-4/30][Array] #1 Two Sum

## #1 Two Sum

#### 題目難度：Easy :star:
#### 題目敘述：
```
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let num_1, num_2;
  let numbers = [];

  for(let i = 0; i < nums.length; i++) {
    num_1 = nums[i];
    num_2 = target - num_1;

    if(numbers.indexOf(num_2) !== -1) {
      return [numbers.indexOf(num_2), i];
    } else {
      numbers[i] = num_1;
    }
  }
};
```
#### 題目連結：[1. Two Sum](https://leetcode.com/problems/two-sum/)
#### 解題說明：
今天是第四天啦～結束了字串 `String` 篇，接下來三天主題是陣列 `Array`！  
既然是 `Array` 第一天，當然就要先從最簡單的題目開始囉，所以今天來解 `LeetCode` 題庫第一題 [1. Two Sum](https://leetcode.com/problems/two-sum/)，  

題目是給**一個陣列**和**一個數字**，數字會是這個陣列裡的某兩個數字的總和，答案就是**這兩個數字在陣列的位置**，看他給的範例就能秒懂了～  
這題用到最基本的 `Array`，沒有什麼花俏的演算法，所以請輕鬆服用即可！  
#### 解題步驟：
- 步驟 1.  
宣告我們需要變數，  
`num_1` 跟 `num_2` 分別代表**目前數字**跟**需求數字**，  
什麼事**需求數字**呢？下一個步驟會說明～  
`numbers[]` 則是用來存已經掃過的數字。  
```javascript
let num_1, num_2;
let numbers = [];
```

- 步驟 2.  
最外層的 `for` loop 就是一個一個掃過去陣列，  
然後將 `num_1` 存目前的數字，`num_2` 是 `num_1` 跟 `target` 的差距，  

  因為題目要我們找兩個數字的總和，所以思路是：  
  **存一個目前的數字，找之前掃過的數字中有沒有剛好加起來是 `target` 的數字**，如果有的話那很好，直接 ```return [numbers.indexOf(num_2), i];``` ，就是答案需要的 **`[位置1, 位置2]`** ！  
  但不幸如果找不到的話，也沒什麼，就存在 `numbers[]` 裡就好，以備未來不實之用！  
  完成！  

  備註：[`indexOf()`](http://www.w3schools.com/jsref/jsref_indexof.asp) 的用法，就是在 `Array` 中找出指定東西的位置，是不是非常好用呢～～  
```javascript
for(let i = 0; i < nums.length; i++) {
  num_1 = nums[i];
  num_2 = target - num_1;

  if(numbers.indexOf(num_2) !== -1) {
    return [numbers.indexOf(num_2), i];
  } else {
    numbers[i] = num_1;
  }
}
```
