
# this question on about the first solve iteration of the finding the 2nd node from teh end of the linkedList
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: Optional[ListNode]
        :type n: int
        :rtype: Optional[ListNode]
        """
        sentinal = ListNode()
        first = sentinal
        sentinal.next = head
        for i in range(n):
            first = first.next
        second = sentinal
        while first.next:
            first = first.next
            second = second.next
        second.next = second.next.next
        return sentinal.next
        