///// LEFT --> RIGHT ---> ROOT
class Node {
    constructor(val, left, right) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}



var isSymmetric = function(root) {
    return traverse(root, root);
    function traverse(nodeA, nodeB) {
        if (nodeA === null && nodeB === null) return true;
        if (nodeA === null || nodeB === null) return false;
        
        return (nodeA.val === nodeB.val && traverse(nodeA.left, nodeB.right) && traverse(nodeA.right, nodeB.left))
    }
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