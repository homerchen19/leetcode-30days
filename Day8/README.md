# [Leetcode-8/30][Matrix] #54 Spiral Matrix
## #54 Spiral Matrix

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
```
#### 題目解答：
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  if(matrix.length === 0) {
    return [];
  }

  let ans = [];
  const m = matrix.length, n = matrix[0].length;
  const layer = Math.floor((Math.min(m, n) + 1) / 2);

  for(let i = 0; i < layer; i++) {
    const lastRow = m - i - 1;
    const lastCol = n - i - 1;

    if(i === lastRow) { // 最後一行
      for(let j = i; j <= lastCol; j++) {
        ans.push(matrix[i][j]);
      }
    } else if(i === lastCol){ // 最後一列
      for(let j = i; j <= lastRow; j++) {
        ans.push(matrix[j][i]);
      }
    } else { // 螺旋式歷遍
      for(let j = i; j < lastCol; j++) {
        ans.push(matrix[i][j]);
      }

      for(let j = i; j < lastRow; j++) {
        ans.push(matrix[j][lastCol]);
      }

      for(let j = lastCol; j > i; j--) {
        ans.push(matrix[lastRow][j]);
      }

      for(let j = lastRow; j > i; j--) {
        ans.push(matrix[j][i]);
      }
    }
  }

  return ans;
};
```
#### 題目連結：[54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
#### 解題說明：
今天是第八天，差一點點就放棄了...  

好的，總而言之今天還是繼續 `Matrix` 的主題，[昨天](https://github.com/xxhomey19/leetcode-30days/tree/master/Day7)我們寫的是 [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)，今天寫他的一部曲 [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)，  

題目給一個矩陣，然後要求回傳**螺旋式歷遍矩陣的數字**出來，  
題目非常簡潔明瞭，所以跟昨天一樣，我們用 **`由左到右`**、**`由上到下`**、**`由右到左`**、**`由下到上`** 的方式走一圈，然後 **`由外到內`** 一層一層走，  
詳細步驟將在後面解說～  

#### 解題步驟：
- 步驟 1.  
宣告我們需要的變數，同時也是理解**如何走遍**矩陣的步驟～  
我們先抓出**矩陣高度 `m`** 跟 **矩陣寬度 `n`** ，  
而圈數則是 `m 或 n 的最小值 + 1 / 2`。  

```javascript
let ans = [];
const m = matrix.length, n = matrix[0].length;
const layer = Math.floor((Math.min(m, n) + 1) / 2);
```  

- 步驟 2.  
重點來了，  
```
XXXXX
XOOOX
XOOOX
XOOOX
XXXXX
```
從上圖可知，最外圈的**上下左右邊**我們都要取**4個X**，所以對於第 `i` 層來說，我們要取的長就是 `m - i - 1`、寬是 `n -i - 1`，  
但在某些例子跑到最後一圈時，可能會遇到一個問題，如下圖，  
```
OOOOO
OXXXO
OOOOO
```
從上圖可知，**最後一圈沒有上下左右邊！**  
所以需另外處理只剩單獨一行或一列的情況！  

除了單獨一行跟單獨一列的情況外，  
只要一圈一圈**螺旋式歷遍**即可！  
完成！  

```javascript
for(let i = 0; i < layer; i++) {
  const lastRow = m - i - 1;
  const lastCol = n - i - 1;

  if(i === lastRow) { // 最後一行
    for(let j = i; j <= lastCol; j++) {
      ans.push(matrix[i][j]);
    }
  } else if(i === lastCol){ // 最後一列
    for(let j = i; j <= lastRow; j++) {
      ans.push(matrix[j][i]);
    }
  } else { // 螺旋式歷遍
    for(let j = i; j < lastCol; j++) {
      ans.push(matrix[i][j]);
    }

    for(let j = i; j < lastRow; j++) {
      ans.push(matrix[j][lastCol]);
    }

    for(let j = lastCol; j > i; j--) {
      ans.push(matrix[lastRow][j]);
    }

    for(let j = lastRow; j > i; j--) {
      ans.push(matrix[j][i]);
    }
  }
}

return ans;
```
