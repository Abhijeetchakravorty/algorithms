///// LEFT --> RIGHT ---> ROOT
class Node {
    constructor(val, left, right) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}

var maxDepth = function(root) {
    let levels = [];
    if (!root) {
            return levels;
    }
    return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
}

let root = new Node("F");
root.left = new Node("B");
root.right = new Node("G");
root.right.right = new Node("I");
root.right.right.left = new Node("H");
root.left.left = new Node("A");
root.left.right = new Node("D");
root.left.right.left = new Node("C");
root.left.right.right = new Node("E");
console.log(maxDepth(root));

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
console.log(maxDepth(root));