// left --> right ---> root
class Node {
    constructor(val, left, right) {
            this.val = (val === undefined ? 0: val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}
let arr = [];
var postorderTraversal = function(root) {
    if (root !== null) {
        postorderTraversal(root.left);

        postorderTraversal(root.right);

        arr.push(root.val);
    }
}

let root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);
postorderTraversal(root);
console.log(arr);