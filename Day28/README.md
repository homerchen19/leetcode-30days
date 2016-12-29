# [Leetcode-28/30][Permutations] #46 Permutations

## #46 Permutations

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:

[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  let result = [];
  result.push([nums[0]]);

  for(let i = 1; i < nums.length; i++) {
    let newResult = [];

    for(let j = 0; j < result.length; j++) {
      for(let m = 0; m <= i; m++) {
        let list = result[j].slice();
        list.splice(m, 0, nums[i]);
        newResult.push(list);
      }
    }

    result = newResult;
  }

  return result;
};
```
#### 題目連結：[46. Permutations](https://leetcode.com/problems/permutations/)
#### 解題說明：
最後一個系列了！是**排列組合**！我們就先從 **排列** 開始講吧～  
基本上排列組合就跟我們高中學的數學一樣，通常是用 **DFS、遞迴** 去解，但也有硬幹的...  

今天的題目就用硬幹的方式來解吧，題目給我們一個包含幾個數字陣列，要我們回傳一個二維陣列，裡面包含所有可能的排列陣列，  
這題也可以用 DFS 去解，但我想說就用土炮的方式去寫，應該是最好懂的方式，我們就來試試吧！  

#### 解題步驟：
- 步驟 1.  
我們就用一個步驟一次講解玩吧～  

  思路是，每次放一個新的數字進去做排列，  
  例如有 `[1, 2, 3]`，最外層的 `for` loop 就控制一次加一個數字，`[1]` -> `[1, 2]` -> `[1, 2, 3]`，然後每次 `newResult` 存每次排列出來的結果，執行範例如下  
  1. `[1]` 就有 **`[1]` 一種可能**
  2. `[1, 2]` 有 **`[1, 2]`、`[2, 1]` 兩種可能**
  3. `[1, 2, 3]` 有 **`[3, 2, 1]`、`[2, 3, 1]`、`[2, 1, 3]`、`[3, 1, 2]`、`[1, 3, 2]`、`[1, 2, 3]` 六種可能**


  `result` 一開始先放 `nums[0]` 進去，之後就沒什麼用處了，只要每次都等於排列出來的結果 `result = newResult;` 就好，  

  裡面兩個 `for` loop 是迭代 **已排列過的二維陣列 `result` 和 目前已加入的數字 `i`**，  
  然後 `list` 是每一個之前排列過的一維陣列，之所以用 [`slice()`](http://www.w3schools.com/jsref/jsref_slice_array.asp) 是因為排列要不能影響之前 `result[j]`，算是一種 `deep copy` 的方式，  
  接著用 `splice(m, 0, nums[i]` 在每個位置插入一個數字，以達到排列的效果，  
  最後 `newResult` 存下每個排列方式，最後再送給 `result`，回傳之，完成！  

```javascript
const permute = nums => {
  let result = [];
  result.push([nums[0]]);

  for(let i = 1; i < nums.length; i++) {
    let newResult = [];

    for(let j = 0; j < result.length; j++) {
      for(let m = 0; m <= i; m++) {
        let list = result[j].slice();
        list.splice(m, 0, nums[i]);
        newResult.push(list);
      }
    }

    result = newResult;
  }

  return result;
};
```  
