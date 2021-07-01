class Node {
        constructor(val, left, right, next) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
                this.next = (next === undefined ? null : next);
        }
}
var connect = function(root) {
        if (!root) return root;
        let leftmostNode = root;
        while (leftmostNode) {
                let node = leftmostNode;
                let prev = null;
                leftmostNode = null;
                while (node) {
                        if (node.left) {
                                if (prev) prev.next = node.left;
                                prev = node.left;
                                if (!leftmostNode) leftmostNode = node.left;
                        }
                        if (node.right) {
                                if (prev) prev.next = node.right;
                                prev = node.right;
                                if (!leftmostNode) leftmostNode = node.right;
                        }
                        node = node.next;
                }
        }
        return root;
};
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(7);
console.log(connect(root));