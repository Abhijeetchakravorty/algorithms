/// LEFT ------> ROOT ----> RIGHT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? null : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}
var inorderTraversal = function(root) {
        /// IN ORDER TRAVERSAL
        // LEFT -----> ROOT ----> RIGHT
        let result = [];
        let nodeStack = [];
        let curr = root;
        while(curr !== null || nodeStack.length > 0) {
                while(curr !== null) {
                        nodeStack.push(curr);
                        curr = curr.left;
                }
                let node = nodeStack.pop();
                result.push(node.val);
                curr = node.right;
        }
        return result;
}
let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let finaArr = inorderTraversal(root);
console.log(finaArr);