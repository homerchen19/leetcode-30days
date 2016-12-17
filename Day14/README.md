# [Leetcode-14/30][Tree] #114 Flatten Binary Tree to Linked List

## #114 Flatten Binary Tree to Linked List

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6

The flattened tree should look like:

   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  if(!root || (!root.left && !root.right)) return;
  if(root.left) flatten(root.left);
  if(root.right) flatten(root.right);

  const tmpRight = root.right;
  root.right = root.left;
  root.left = null;

  while(root.right) root = root.right;
  root.right = tmpRight;
};
```
#### 題目連結：[114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
#### 解題說明：
今天是 `tree` 的第二篇，挑戰難度 **Medium** 的題目 [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)，而且這題還會跟前一個主題 `Linked List` 有點關係，算是蠻綜合又有趣的題目。  

題意是給我們一個 `Binary Tree`，然後要我們把這個 `tree` 裡的節點由小到大組成一個 `Linked List`，  
想法和[前一題](https://github.com/xxhomey19/leetcode-30days/tree/master/Day13)蠻像的，我們 DFS + 遞迴的方式解。  

#### 解題步驟：
- 步驟 1.  
這題一樣只要一個步驟就可以解完，  
想法是先利用 DFS 找到最左子節點（此時該節點的 `root.left` 和 `root.right` 都是 `null`），  
然後回到其父節點，先將右節點跟父節點斷開，  
然後把左節點接到右節點上，並且把左節點設為 `null`，  
最後再把 **原本的右節點** 連到到 **新右節點的右節點** 上，  
最後再回到上一個父節點繼續做相同的操作。  

  操作流程如下圖，
```
     1
    / \
   2   5
  / \   \
 3   4   6

     1
    / \
   2   5
    \   \
     3   6
      \    
       4

   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
```
  完成！
```javascript
const flatten = root => {
  if(!root || (!root.left && !root.right)) return;
  if(root.left) flatten(root.left);
  if(root.right) flatten(root.right);

  const tmpRight = root.right;
  root.right = root.left;
  root.left = null;

  while(root.right) root = root.right;
  root.right = tmpRight;
};
```
