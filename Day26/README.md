# [Leetcode-26/30][Bit Manipulation] #137 Single Number II

## #137 Single Number II

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an array of integers, every element appears three times except for one.
Find that single one.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let ones = 0, twos = 0, threes = 0;

  for(let i = 0; i < nums.length; i++) {
    twos |= ones & nums[i];
    ones ^= nums[i];
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
};
```
#### 題目連結：[137. Single Number II](https://leetcode.com/problems/single-number-ii/)
#### 解題說明：
到第 26 天囉～ 就快結束啦！  
今天的主題依然是 `位元操作 Bit Manipulation`～

[137. Single Number II](https://leetcode.com/problems/single-number-ii/) 的題意是給你一個充滿數字的陣列，裡面有些數字會出現三次，有些出現一次，**請我們找出只出現一次的數字**。  

這題我們會大量運用 [`Bitwise operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)，算是一個還不錯的練習！  

#### 解題步驟：
- 步驟 1.  
每個數字由二進位 32 bits 來表示，我們宣告三個變數 `ones` `twos` `threes` 分別記錄每個位元出現的次數，  
然後我們來逐條（其實也才五條）解釋 `for` loop 裡的程式，

  1. `twos |= ones & nums[i];` ：先取出 `ones` 和`nums[i]` 中同為 1 的位元，會重疊代表這些位元出現兩次，再跟 `twos` 進行 [`OR`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR) 運算，把出現兩次的位元記錄在 `twos` 裡  
  2. `ones ^= nums[i];` ：第一次出現的數字跟 `ones` 進行 [`XOR`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)，把出現兩次的位元會清成 0，  
  3. `threes = ones & twos;` `threes` 則是取出 `ones` 跟 `twos` 中同為 1 的位數，  
  4. `ones &= ~threes;` 跟 `twos &= ~threes;` 都是已經把出現三次的存在 three 裡了，所以把 `ones` 跟 `twos` 的清掉，

  最後 `ones` 就是只出現一次的數字了，完成！  

```javascript
const singleNumber = nums => {
  let ones = 0, twos = 0, threes = 0;

  for(let i = 0; i < nums.length; i++) {
    twos |= ones & nums[i];
    ones ^= nums[i];
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
};
```  
