class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class MyLinkedList(object):
    def __init__(self):
        pass


# Create and print manually for testing
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)

node1.next = node2
node2.next = node3

current = node1
while current:
    print(current.val)
    current = current.next