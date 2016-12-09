# [Leetcode-6/30][Array] #442 Find All Duplicates in an Array

## #442 Find All Duplicates in an Array

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?


```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    const number = Math.abs(nums[i]);

    if(nums[number - 1] < 0) {
      ans.push(number);
    } else {
      nums[number - 1] *= -1;
    }
  }

  return ans;
};
```
#### 題目連結：[442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
#### 解題說明：
今天是 `Array` 篇最後一天，原本想說挑戰難度 **Hard** 的，但實在沒啥時間所以就還是解個看起來很簡單，但其實另有蹊蹺的題目 [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)，  

這題題目很簡單，給你一個陣列，裡面的數字可能出現 **1次** 或 **2次**，請找出出現 **2次** 的數字，  
這聽起來很簡單啊，只要有另一個陣列存已經出現過的，然後判斷這數字有沒有在那個陣列裡就好了，  
結果...**超時GG**...  
因為這題還另外要求複雜度要是 `O(n)` 且不能使用額外空間  

好的，所以這題我們改個方式寫，  
我們採用 **正負號標記法**，  
詳細說明會在解題步驟詳述！  

#### 解題步驟：
- 步驟 1.  
其實也只需要一個步驟就能解釋完畢了！是不是很簡單啊～  

  首先，因為不能使用額外空間，所以我們只宣告 `ans[]` 當答案的容器，  

  接著，用 `for` loop 掃過 `nums[]`，`number` 代表現在的值，至於為什麼要取絕對值我等等會說明～  

  **正負號標記法**的想法是：
當遇到某數字第一次時，將 `nums[number - 1] *= -1;`  
只要判斷到 `nums[number - 1] < 0`  就知道之前出現過啦～  
又因為正負號的關係，只要是問出現偶次都可以解決（看題目要求）～  
完成！  

```javascript
const findDuplicates = nums => {
  let ans = [];

  for(let i = 0; i < nums.length; i++) {
    const number = Math.abs(nums[i]);

    if(nums[number - 1] < 0) {
      ans.push(number);
    } else {
      nums[number - 1] *= -1;
    }
  }

  return ans;
};
```
