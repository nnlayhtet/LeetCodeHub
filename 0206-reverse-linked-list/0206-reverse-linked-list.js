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

//null  <-  1   <-  2            3   ->  4   ->  5   ->  null
//                  c
//                  t
//                               n
var reverseList = function(head) {
    let c = head;
    let t = null;
    while (c!==null){
        let n = c.next;
        c.next = t;
        t = c;
        c = n;
    }
    return t;
};