# [Leetcode-13/30][Tree] #226 Invert Binary Tree

## #226 Invert Binary Tree

#### 題目難度：Easy :star:
#### 題目敘述：
```
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9

to

     4
   /   \
  7     2
 / \   / \
9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

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
 * @return {TreeNode}
 */
const invertTree = root => {
  if(!root) return root;

  const tmpLeft = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmpLeft);

  return root;
};
```
#### 題目連結：[226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
#### 解題說明：
又進入到新的章節囉！這三天的主題是 `tree`，  
`tree` 基本上就**二元樹 `Binary Tree`**，也就是樹上的每一個節點都有一個 **左節點** 跟一個 **右節點**，  
`tree` 通常以 `function` 或 `class` 的方式表現，如下是以 `java` 寫的，  
```java
class TreeNode{
  int value;
  TreeNode left;
  TreeNode right;
}
```
**`Binary Tree`** 只是最基本 `tree` 的形式，還有更多不同種的 `tree` 如：
1. Binary Search Tree
2. Balanced Tree, Unbalanced Tree
3. Full Binary Tree
...

等之後如果題目有用到再仔細解釋！  

今天是 `tree` 的第一篇，照慣例我們先來寫一個難度 **Easy** 的題目 [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)～  

題意很清楚，給你一個 `Binary Tree` 要你以最開頭為中心來反轉它，如此而已～～～  

#### 解題步驟：
- 步驟 1.  
這題只要五行，用遞迴的方式去跑就行了～  

  想法是，如果節點 `root` 不存在就代表遞迴結束，  
然後把左節點 `root.left` 設為右節點 `root.right` 的遞迴結果，  
把右節點 `root.right` 設為左節點 `root.left` 的遞迴結果，
就這樣，完成！  

```javascript
const invertTree = root => {
  if(!root) return root;

  const tmpLeft = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmpLeft);

  return root;
};
```
