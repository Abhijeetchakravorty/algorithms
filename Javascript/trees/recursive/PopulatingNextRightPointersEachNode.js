class Node {
    constructor(val, left, right, next) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
            this.next = (next === undefined ? null : next);
    }
}
var connect = function(root) {
    if (root == null) return root;
    connectTwoNode(root.left, root.right)
    return root;
};

function connectTwoNode(node1, node2) {
    if (node1 == null) return node1;
    node1.next = node2;
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    connectTwoNode(node1.right, node2.left);
}
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(connect(root));