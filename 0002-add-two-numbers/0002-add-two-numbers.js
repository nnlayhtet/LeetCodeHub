/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     let resultNode = new ListNode();
    
//     function reverseLinkedList(head) {
//         let prev = null;
//         let current = head;
//         while(head){
//             head = head.next;
//             current.next = prev;
//             prev = current;
//             current = head;
//         }
        
//         return prev
//     }
    
//     let reversedL1 = reverseLinkedList(l1)
//     let valL1 = [];
//     let reversedL2 = reverseLinkedList(l2)
//     let valL2 = [];
//     let sum = 0;
//     while(reversedL1) {
//         valL1.push(reversedL1.val.toString());
//         reversedL1 = reversedL1.next;
//     }
//     while(reversedL2) {
//         valL2.push(reversedL2.val);
//         reversedL2 = reversedL2.next;
//     }
//     sum = Number(valL1.join("")) +1000
    
//     console.log(sum, typeof(sum))
//     let resultArr = sum.toString().split("").reverse()
//     let headNode
//     for(let i = 0; i < resultArr.length; i++) {
//         let newNode = new ListNode(+resultArr[i])
//         if(i === 0) {
//             headNode = newNode
//             resultNode = headNode
//         } else {
//             headNode.next = newNode
//             headNode = headNode.next
//         }
//     }
//     return resultNode;
// };

var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1 || l2 || sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};