# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: Optional[ListNode]
        :type k: int
        :rtype: Optional[ListNode]
        """
        if not head or not head.next  :
            return head
        curr = head
        #find the length of the linkedList
        length = 0
        while curr:
            curr = curr.next
            length+=1
        fast = head
        slow = head
        k = k % length
        for i in range(k):
            fast = fast.next
        while fast.next :
            slow = slow.next
            fast = fast.next
        fast.next = head
        newHead = slow.next
        slow.next = None
        return newHead
        
        