/**
 * Given a linked list, determine if it has a cycle in it.
 *
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
