/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 *
 * For example,
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
 *
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
