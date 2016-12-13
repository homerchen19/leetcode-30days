# [Leetcode-4/30][Array] #141 Linked List Cycle

## #141 Linked List Cycle

#### 題目難度：Easy :star:
#### 題目敘述：
```
Given a linked list, determine if it has a cycle in it.
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
 * @return {boolean}
 */
const hasCycle = head => {
  if(head === null || head.next === null) {
    return false;
  }

  let fast = head.next;
  let slow = head;

  while(fast !== slow) {
    if(fast === null || fast.next === null) {
      return false;
    }

    fast = fast.next.next;
    slow = slow.next;
  }

  return true;
};
```
#### 題目連結：[141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
#### 解題說明：
今天是第十天，又要進入下一個主題囉～  
這次的主題是 **`Linked List`** ， **`Linked List`** 是個能快速方便地動態新增和刪除的資料結構，與陣列不同的是， **`Linked List`** 的元素在記憶體中是不連續的，而陣列是連續的，  
每個節點（node）都是由一個資料（data）和一個指向下一個節點的指標（next pointer）組成，  
在 `JavaScript` 中， **`Linked List`** 通常是以 `class` 或 `function` 實作的。  

今天的題目很簡單，難度只有 **`Easy`**，  
題意很言簡意賅，**給一個 `Linked List`，然後確認有沒有 `cycle` 在裡面**，  
我們使用 **`雙指標追擊法`** 來解決這題，詳細步驟將在下面說明～  

#### 解題步驟：
- 步驟 1.  
快指針 `fast` 一次走兩步，  
慢指針 `slow` 一次走一步，  
所以快指針 ` fast` 永遠會追擊著慢指針 `slow`，  
**期待有 `cycle` 的話， `fast` 會追上 `slow`** ，
這裡我們先讓 `fast = head.next;` `slow = head;`。  

```javascript
let fast = head.next;
let slow = head;
```  
- 步驟2.  
這是主要的一步，  
如果 `Linked List` 沒有 `cycle` 的話，那 `fast` 會遇到 `null`， `return false` 。  
如果 `Linked List` 有 `cycle` 的話，那 `fast` 一定會遇到 `slow`，並且 `fast` 已經超過 `slow` 一整圈， `return true`。  
完成！  

```javascript
while(fast !== slow) {
  if(fast === null || fast.next === null) {
    return false;
  }

  fast = fast.next.next;
  slow = slow.next;
}

return true;
```
