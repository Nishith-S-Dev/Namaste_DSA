// this question on about the first solve iteration of the finding the 2nd node from teh end of the linkedList
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let senitialNode = new ListNode();
     senitialNode.next = head;
    let prev = senitialNode;
    let curr = head;
    let index = 0
    while(curr)
    {
        curr= curr.next;
        index++;
    }
    let prevlength = index-n;
    for(let i =0;i<prevlength;i++)
    {
        prev = prev.next;
    }
    prev.next=prev.next.next;
    return senitialNode.next;
};