class Node:
        def __init__(self, dataval=None):
                self.dataval = dataval
                self.nextval = None

class SLinkedList:
        def __init__(self):
                self.headval = None
        
        def listprint(self):
                printval = self.headval
                while printval is not None: # None is equivalent to null keyword Python
                        print(printval.dataval)
                        printval = printval.nextval 
        
        #adding node in the beginning
        def AtBeginning(self, newdata):
                NewNode = Node(newdata) #new node I am creating a new node and assigning to new variable
                NewNode.nextval = self.headval # then I assjgn the head val to the next val of new node
                self.headval = NewNode  # then I assign the new node to the head val
        
        #Adding node at end
        def AtEnd(self, newdata):
                endNode = Node(newdata)
                if self.headval is None:
                        print("I am in headval")
                        self.headval = endNode
                        return
                laste = self.headval
                while(laste.nextval):
                        laste = laste.nextval
                laste.nextval = endNode
        
        def InBetween(self, middle_node, newdata):
                if middle_node is None:
                        print("The mentioned node is absent")
                        return
                NewNode = Node(newdata)
                NewNode.nextval = middle_node.nextval
                middle_node.nextval = NewNode

list1 = SLinkedList()
list1.headval = Node("Mon")
e2 = Node("Tue")
e3 = Node("Wed")
list1.headval.nextval = e2
e2.nextval = e3
list1.AtBeginning("Sun")
list1.InBetween(list1.headval.nextval,"Fri")
list1.AtEnd("Thur")
list1.listprint()