# [Leetcode-7/30][Matrix] #59 Spiral Matrix II

## #59 Spiral Matrix II

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```
#### 題目解答：
```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = n => {
  if(n === 0) {
    return [];
  } else if(n === 1) {
    return [[1]];
  }

  let ans = [];
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  let num = 1;

  for(let i = 0; i < n; i++) {
    let tmp = [];

    for(let j = 0; j < n; j++) {
      tmp.push(0);
    }

    ans.push(tmp);
  }

  while(left < right) {
    // left -> right
    for(let i = left; i < right; i++) {
      ans[top][i] = num++;
    }

    // top -> bottom
    for(let i = top; i < bottom; i++) {
      ans[i][right] = num++;
    }

    // right -> left
    for(let i = right; i > left; i--) {
      ans[bottom][i] = num++;
    }

    // bottom -> top
    for(let i = bottom; i > top; i--) {
      ans[i][left] = num++;
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  if(n % 2 === 1) {
    n = Math.floor(n / 2);
    ans[n][n] = num;
  }

  return ans;
};
```
#### 題目連結：[59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)
#### 解題說明：
今天是第七天，又是新的主題 `矩陣 Matrix` 篇的一天，  
矩陣的題目通常不會太難，主要是考對於 **二維陣列** 的操作熟悉度，跟細心程度而已～  
今天寫的題目是 [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)，想法很簡單，但不知道為什麼難度是 **Medium**，  
所以下次看到難度 **Medium** 別害怕，有些其實很平易近人的哈哈哈  
至於為什麼是先寫 [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)，而不是 [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)，  
是因為前者比後者簡單ＸＤ  

這題題目會給一個正整數 `n`，請列出 `n^2` 的矩陣，且數字是**由左到右**、**由上到下**遞增（螺旋遞增），  
這題不會用到什麼演算法，只要單純操作二維陣列就好～  

#### 解題步驟：
- 步驟 1.  
題目說得很清楚，要我們的矩陣 **由左到右**、**由上到下** 遞增，  
所以程式就是照這句話去實踐，  

  先來宣告我們需要的變數，  
`ans[]` 是要回傳的答案，  
**`left, right, top, bottom`** 代表每次螺旋繞最外圈的 **`左, 右, 上, 下`** 邊界，  
`num` 是矩陣裡的數字，初始值為 1。  
```javascript
let ans = [];
let left = 0, right = n - 1, top = 0, bottom = n - 1;
let num = 1;
```  

- 步驟 2.  
接著我們來初始化 `ans` 矩陣，先把全部格子初始化為 0。
```javascript
for(let i = 0; i < n; i++) {
  let tmp = [];

  for(let j = 0; j < n; j++) {
    tmp.push(0);
  }

  ans.push(tmp);
}
```  

- 步驟 3.  
這步驟是實作矩陣的**螺旋遞增**，  
最外圈的 `while` loop 用來進行一圈一圈的控制，  
我們每一圈都是 **`由左到右`**、**`由上到下`**、**`由右到左`**、**`由下到上`** 的方式在走，  
並且由 **`由外到內`** 的一層一層往內建立螺旋遞增矩陣， 所以 `while` loop 最後面才要將上下左右邊界都往內移一格。  

```javascript
while(left < right) {
  // left -> right
  for(let i = left; i < right; i++) {
    ans[top][i] = num++;
  }

  // top -> bottom
  for(let i = top; i < bottom; i++) {
    ans[i][right] = num++;
  }

  // right -> left
  for(let i = right; i > left; i--) {
    ans[bottom][i] = num++;
  }

  // bottom -> top
  for(let i = bottom; i > top; i--) {
    ans[i][left] = num++;
  }

  left++;
  right--;
  top++;
  bottom--;
}
```  

- 步驟 4.  
別以為走完一圈又一圈後就結束了！  
這裡有個需要細心的地方，  
**如果 `n` 是奇數，最中間的那格要是最後的 `num`**，  

  這裡會用到 [`Math.floor()`](http://www.w3schools.com/jsref/jsref_floor.asp)，因為 `JavaScript` 沒有像 `int`、`floot`、`double` 這些變數型別，所以直接將數字除以 2 會得到不是正整數的數字，而當然沒有 `ans[1.5][1.5]` 這種東西，  
所以要將 `n / 2` 取無條件捨去的正整數，就代表整個矩陣的正中央那格，將他設為最新的 `num`。  
完成！  

```javascript
if(n % 2 === 1) {
  n = Math.floor(n / 2);
  ans[n][n] = num;
}

return ans;
```  
