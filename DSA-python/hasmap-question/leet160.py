# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        store = set()
        curra = headA
        curr = headB
        while(curr):
            store.add(curr)
            curr = curr.next
        while(curra):
            if curra in store:
                return curra
            curra = curra.next
        return None

        