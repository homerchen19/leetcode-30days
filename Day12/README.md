# [Leetcode-12/30][Linked List] #2 Add Two Numbers

## #2 Add Two Numbers

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order
and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let list = new ListNode(0);
  const result = list;
  let carry = 0;

  while(l1 || l2 || carry > 0) {
    let sum = 0;

    if(l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if(l2 !== null){
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;
    list.next = new ListNode(sum % 10);
    carry = parseInt(sum / 10);

    list = list.next;
  }

  return result.next;
};
```
#### 題目連結：[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
#### 解題說明：
今天進入 `Linked List` 最後一篇～  
這題依然是屬於偏簡單的題目，沒什麼演算法，但我想看似簡單的題目最有可能考給前端或後端工程師，因為其實做應用方面的工程師幾乎用不到演算法，所以我覺得面試時也不會太刁難在演算法。  

題目會給兩個 `Linked List`，分別代表兩個可能是不同長度的數字，我們要回傳一個兩個數字相加後的結果，並且以 `Linked List` 的方式組成。  

這題非常容易，不論是以 `Linked List` 的方式組成，或是以 `String` 、 `Array` 的方式去組成那兩個數字，方法都一樣！  
想法都是**一次處理一位數，用 `While` loop 控制何時結束**就可以了！  
至於**進位問題**，則是**在每一次 `while` 跑完前先暫存要進位多少，下一次迴圈再先加上去即可**～  

#### 解題步驟：
- 步驟 1.  
`list` 是我們用來裝答案的 `Linked List`，我們先幫他初始化，  

  `result` 則是方便我們能直接回傳起點為 `0` 的節點，因為 `list` 在 `while` loop 裡會一直移動指標，所以我們將 `result` 令為剛初始化的 `list`，  

  `carry` 代表進位的數字。  

```javascript
let list = new ListNode(0);
const result = list;
let carry = 0;
```  
- 步驟 2.  
最外層的 `while` loop 控制每次加法運算，如果 `l1 === null` 或 `l2 === null`  或 `carry === 0` 時就當作運算結束！  

  每次只算一個位數，所以都先把總和 `sum`  設為 0，然後因為 `l1` 跟 `l2` 長度可能不一樣，所以要分開處理。  

```javascript
while(l1 || l2 || carry > 0) {
  let sum = 0;

  if(l1 !== null) {
    sum += l1.val;
    l1 = l1.next;
  }

  if(l2 !== null){
    sum += l2.val;
    l2 = l2.next;
  }

  ...
}
```  
- 步驟 3.  
最後一個步驟，  
先把 `sum` 加上前一次迴圈留下來的進位 `carry`，  
然後把 `list` 的 `next` 指標作為 `sum` 的個位數，  
最後把 `carry` 算出來，再進行下一次迴圈，  

  最後的最後，我們要回傳 `result.next` 是因為， `result` 是 `list` 的最最最開頭 `new ListNode(0)`，  
假設答案是 `1234` 但我們總不能回傳一個 `01234` 這種數字吧！所以我們要回傳 `result` 的第二個數字開始的 `Linked List` 回去，  
完成！  

```javascript
while(l1 || l2 || carry > 0) {
  ...

  sum += carry;
  list.next = new ListNode(sum % 10);
  carry = parseInt(sum / 10);

  list = list.next;
}

return result.next;
```  
