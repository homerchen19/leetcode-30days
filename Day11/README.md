# [Leetcode-11/30][Linked List] #82 Remove Duplicates from Sorted List II

## #82 Remove Duplicates from Sorted List II

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
```
#### 題目解答：
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  if(head === null) {
    return null;
  }

  if(!head || !head.next){
    return head;
  }

  if(head.val === head.next.val){
    const value = head.val;
    while(head && head.val === value){
      head = head.next;
    }

    return deleteDuplicates(head);
  } else {
    let ans = head;
    head = deleteDuplicates(head.next);
    ans.next = head;
    return ans;
  }
};
```
#### 題目連結：[82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
#### 解題說明：
進入第 11 天囉！  
現在寫難度 **Medium** 的題目已經能比較快解出來了嗎？  
其實我也不知道真正面試會考到多難的題目，但我想目前能先把 **Medium** 練好，應該就能應付大部分的題目了！  

今天主題依然是 `Linked List` ，選擇比昨天難一點點的題目 [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)，  
其實 `Linked List` 的題目只要能掌握目前節點 `node` 的資料 `data` 和下一個節點的指標 `next` 的運用，題目基本上都是圍繞著**指標的移動**。

題目給一個 `Linked List`，然後我們要把重複出現的節點踢除，  
如範例：`1->2->3->3->4->4->5`，可以看出 `3` 跟 `4` 重複出現了所以要踢除，所以答案就是 `1->2->5`，這題目只需一個步驟即可解釋完畢。  

#### 解題步驟：
- 步驟 1.  
我們用 **遞迴** 的方式來解這題，  
**每次遞迴只比較 現在節點 `haed` 跟 下一個節點 `head.next`**，  
會遇到三種情況：  

  1. `head` 、`head.next` 其中一個是 `null`，回傳現在節點 `head`
  2. `head` 、`head.next` 相同，找到下一個不同的數字，繼續遞迴下去
  3. `head` 、`head.next` 不同，把目前的 `head` 記錄下來，後面的節點要繼續遞迴下去找，最後組起來 `return` 。  

   如此而已！  
   完成！  

```javascript
if(!head || !head.next){
  return head;
}

if(head.val === head.next.val){
  const value = head.val;
  while(head && head.val === value){
    head = head.next;
  }

  return deleteDuplicates(head);
} else {
  let ans = head;
  head = deleteDuplicates(head.next);
  ans.next = head;
  return ans;
}
```  
