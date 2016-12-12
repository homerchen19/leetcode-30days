# [Leetcode-9/30][Matrix] #73 Set Matrix Zeroes
## #73 Set Matrix Zeroes

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
```
#### 題目解答：
```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  if(matrix.length === 0) return;

  const m = matrix.length, n = matrix[0].length;
  let emptyRow0 = false, emptyCol0 = false;

  // first row
  for(let i = 0; i < n; i++) {
    if(matrix[0][i] === 0) {
      emptyRow0 = true;
      break;
    }
  }

  // first column
  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      emptyCol0 = true;
      break;
    }
  }

  for(let i = 1; i< m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if(emptyRow0) {
    for(let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if(emptyCol0) {
    for(let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
```
#### 題目連結：[73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
#### 解題說明：  
進入到 `Matrix` 最後一天，今天的題目一樣不難～  

題意只有一行，給一個矩陣，如果某一格為 0，則該整行、整列都要為 0，如此簡單！  
這題有幾種不同解法，最直接的方式是複製整個 `matrix` 然後掃過整個矩陣來紀錄每格是否為 0，這樣空間複雜度是 `O(mn)`，好像不太好，  
所以呢我們用一個空間複雜度是 `O(1)` 的方式去解，

想法很簡單，**我們掃過每一格，如果那格為 0，把 0 映射到該第一行、第一列，  
因為只要確定某格對應的第一行、第一列為 0的話，那該行、該列就必定都是 0，**  

但我們得先另外處理真正的第一行、第一列，避免映射完之後會污染原本的第一行、第一列，而導致答案錯誤。  

#### 解題步驟：
- 步驟 1.  
`m` `n` 分別是矩陣的欄、列，  
因為要先處理第一行、第一列是否為 0，給 `emptyRow0 = false;` `emptyCol0 = false;`。  

```javascript
const m = matrix.length, n = matrix[0].length;
let emptyRow0 = false, emptyCol0 = false;
```  

- 步驟2.  
優先掃過第一行、第一列，如果有任一格為 0，則設定各自的 flag 為 `true`。  

```javascript
// first row
for(let i = 0; i < n; i++) {
  if(matrix[0][i] === 0) {
    emptyRow0 = true;
    break;
  }
}

// first column
for(let i = 0; i < m; i++) {
  if(matrix[i][0] === 0) {
    emptyCol0 = true;
    break;
  }
}
```  

- 步驟3.
掃過矩陣中的每一格，如果那格為 0，將 0 映射到該格的第一行、第一列的位置，  

  接著，透過判斷該位置的第一行、第一列的位置是否為 0，就可以知道該格是否為 0 了！  

```javascript
for(let i = 1; i< m; i++) {
  for(let j = 1; j < n; j++) {
    if(matrix[i][j] === 0) {
      matrix[i][0] = 0;
      matrix[0][j] = 0;
    }
  }
}

for(let i = 1; i < m; i++) {
  for(let j = 1; j < n; j++) {
    if(matrix[i][0] === 0 || matrix[0][j] === 0) {
      matrix[i][j] = 0;
    }
  }
}
```  

- 步驟 4.  
最後，透過判斷一開始紀錄第一行、第一列的 `emptyRow0` `emptyCol0` ，最後處理第一行、第一列的數字是口需要為 0，  完成！  

```javascript
if(emptyRow0) {
  for(let i = 0; i < n; i++) {
    matrix[0][i] = 0;
  }
}

if(emptyCol0) {
  for(let i = 0; i < m; i++) {
    matrix[i][0] = 0;
  }
}
```
