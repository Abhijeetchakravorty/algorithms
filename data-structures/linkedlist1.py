class Node:
        def __init__(self, data):
                self.dataval = data
                self.nextval = None

class SLinkedList:
        def __init__(self):
                self.headval = None
        
        def printlist(self):
                printdata = self.headval
                while(printdata is not None):
                        print(printdata.dataval)
                        printdata = printdata.nextval
        
        def AtBeginning(self, data):
                newNode = Node(data)
                newNode.nextval = self.headval
                self.headval = newNode
                
        def AtTheEnd(self, data):
                updatedata = self.headval
                while(updatedata.nextval):
                        updatedata = updatedata.nextval
                updatedata.nextval = Node(data)
        
        def InTheMiddle(self, datan):
                NewData = Node(datan)
                original = self.headval
                EditData = None
                while (original is not None):
                        original = original.nextval
                        if (original.dataval == "Wed"):
                                EditData = original.nextval
                                original.nextval = NewData
                                NewData.nextval = EditData
                                break




g = SLinkedList()
g.headval = Node("Mon")
e1 = Node("Tue")
e2 = Node("Wed")
g.headval.nextval = e1
e1.nextval = e2
# g.printlist()
# print("--------------------------------")
g.AtBeginning("Sun")
# # g.printlist()
# # print("--------------------------------")
g.AtTheEnd("Sat")
# g.printlist()
# print("--------------------------------")
g.InTheMiddle("Thurs")
g.printlist()
