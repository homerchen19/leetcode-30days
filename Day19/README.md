# [Leetcode-19/30][Sort] #75 Sort Colors

## #75 Sort Colors

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let red = 0, white = 0, blue = 0;

  for(let i = 0; i < nums.length; i++) {
    switch(nums[i]) {
      case 0:
        red++;
        break;
      case 1:
        white++;
        break;
      case 2:
        blue++;
        break;
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if(red > 0) {
      nums[i] = 0;
      red--;
    } else if(white > 0) {
      nums[i] = 1;
      white--;
    } else if(blue > 0) {
      nums[i] = 2;
      blue--;
    }
  }
};
```
#### 題目連結：[75. Sort Colors](https://leetcode.com/problems/sort-colors/)
#### 解題說明：
來到第 19 天，也是 `Sort` 篇的第一天！  
`Sort` 有好幾種常見的，像是 `Quick Sort`, `Bubble Sort`, `Insertion Sort`, `Counting Sort` ...等等，  
今天第一天先來寫 [75. Sort Colors](https://leetcode.com/problems/sort-colors/)，
題意是給我們一個字串，陣列中 `0` 代表 `紅色`，`1` 代表 `白色`，`2` 代表 `藍色`，  
要我們把這個字串以 `紅(0) -> 白(1) -> 藍(2)` 的順序排好，所以其實就是要依數字從小排到大的意思！  
這題我們使用類似 `Counting Sort` 的方法來解決。  

計數排序 `Counting Sort` 的觀念是，  
**先掃過一次`陣列 A`，並統計陣列中每個值為 `i` 的元素出現的次數，存到另一個`陣列 B` 的位置 `i`，  
最後以`陣列 B` 從零到底一次次掃過，每次都把位置 `i` 的數字 -1，並把 `i` 存到 `陣列 C`，這樣 `陣列 C`就是從小排到大的陣列了。**  

如果有 `N` 個 `0 ~ K` 的數字，則 `Counting Sort` 的複雜度是 **`O(N + K)`。**  


#### 解題步驟：
- 步驟 1.  
我們用類似 `Counting Sort` 的方法去統計每個顏色出現的次數，  
所以先掃過整個字串，判斷每個字元是 0、 1 或是 2，並依照數字去幫相對應的顏色 +1。  

```javascript
let red = 0, white = 0, blue = 0;

for(let i = 0; i < nums.length; i++) {
  switch(nums[i]) {
    case 0:
      red++;
      break;
    case 1:
      white++;
      break;
    case 2:
      blue++;
      break;
  }
}
```  

- 步驟 2.  
這個步驟也是跟 `Counting Sort` 的概念有點類似，  
我們每一次 `for` loop 都依序消耗一個 `red`、`white`或 `blue`，這樣我們就能保證 `nums[i]` 會以 `0` -> `1` -> `2` 的順序排好了！  
  完成！  

```javascript
for(let i = 0; i < nums.length; i++) {
  if(red > 0) {
    nums[i] = 0;
    red--;
  } else if(white > 0) {
    nums[i] = 1;
    white--;
  } else if(blue > 0) {
    nums[i] = 2;
    blue--;
  }
}
```
