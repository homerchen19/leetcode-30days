# [Leetcode-15/30][Tree] #129 Sum Root to Leaf Numbers

## #129 Sum Root to Leaf Numbers

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
```
#### 題目解答：
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
  return sumNumbersDFS(root, 0);
};

const sumNumbersDFS = (root, sum) => {
  if(!root) return 0;

  sum = sum * 10 + root.val;
  if(!root.left && !root.right) return sum;

  return (sumNumbersDFS(root.left, sum) + sumNumbersDFS(root.right, sum));
};
```
#### 題目連結：[129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
#### 解題說明：
今天是 `tree` 的第三篇，依舊挑戰難度 **Medium** 的題目，因為 **Hard** 太難啦～  
今天的題目 [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) 也是用 **DFS + 遞迴** 就可以解了，  

題意是給我們一個 `Binary Tree`，然後要我們求出 **從 `root` 到所有 `leaves`** 的拼接數字總和，  
其實這題跟算路徑總和是一樣的，只是我們不是直接把節點上數字直接加起來，要多一步驟是**把之前的總和 * 10 再加**，詳細步驟下面解說～  

#### 解題步驟：
- 步驟 1.  
這題一樣只需要一個步驟就好呦～ 輕鬆愜意，  
首先，定義一個叫 `sumNumbersDFS` 的 `function`，傳入初始值 `root` 跟 `sum = 0`，  
如前面有說，我們要把 **把之前的總和 * 10 再加 現在節點的數字 `root.val`** ，  

  接著，可以先判斷這個節點是不是最深的節點了，如果是的話就可以結束遞迴，  

  最後，一樣用 **DFS + 遞迴**，先從左節點 `root.left` 開始 DFS 下去，再跟右節點 `root.right` 往下 DFS 後的結果相加，就大功告成了～  
完成！  

```javascript
const sumNumbers = root => {
  return sumNumbersDFS(root, 0);
};

const sumNumbersDFS = (root, sum) => {
  if(!root) return 0;

  sum = sum * 10 + root.val;
  if(!root.left && !root.right) return sum;

  return (sumNumbersDFS(root.left, sum) + sumNumbersDFS(root.right, sum));
};
```
