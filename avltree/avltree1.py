import sys

class TreeNode(object):
        def __init__(self, key):
                self.key = key
                self.left = None
                self.right = None
                self.height = 1

class AVLTree(object):
        def insert_node(self, root, key):
                if not root:
                        return TreeNode(key)
                elif key < root.key:
                        root.left = self.insert_node(root.left, key)