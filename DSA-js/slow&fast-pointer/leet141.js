// about the floyd cycle detection algorithm
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
var hasCycle = function(head) {
    if(head === null)
    {
       return false;
    }
   let fast = head.next;
   let slow = head;
   while(fast!=slow)
   {
       if(fast === null || fast.next ===null)
       {
           return false;
       }
       slow = slow.next;
       fast = fast.next.next;

   }
   return true;
};