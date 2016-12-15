/**
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8
 *
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
