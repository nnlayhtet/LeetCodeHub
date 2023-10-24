/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let currentNode;
  let nextNode;
  if (head) currentNode = head;
  if (currentNode) {
    nextNode = currentNode.next;
    while (nextNode) {
      if (currentNode.val === nextNode.val) {
        nextNode = nextNode.next;
        if (!nextNode) {
          currentNode.next = null;
          break;
        }
      } else {
        currentNode.next = nextNode;
        currentNode = currentNode.next;
        nextNode = nextNode.next;
      }
    }
  }
  return head;
};