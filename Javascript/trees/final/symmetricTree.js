///// LEFT --> RIGHT ---> ROOT
class Node {
    constructor(val, left, right) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}



var isSymmetric = function(root) {
    return isMirror(root, root);
}

var isMirror = function(t1, t2) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return ((t1.val == t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right));
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
console.log(isSymmetric(root));


root = new Node(3);
root.left = new Node(2);
root.left.right = new Node(4);
root.left.left = new Node(3);
root.right = new Node(2);
root.right.left = new Node(4);
root.right.right = new Node(3);
console.log(isSymmetric(root));