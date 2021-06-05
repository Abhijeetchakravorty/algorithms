// root -> left -> right
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0: val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var preorderTraversal = function(root) {
        let arr = [];
        let nodeStack = [];
        let data = null;
        while(root !== null || nodeStack.length !== 0) {
                nodeStack.push(root);
                data = nodeStack.pop();
                arr.push(data.val);
                if (data.left !== null) {
                        root = data.left;
                } else {
                        root = data.right;
                }
        }
        return arr;
}

let root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);
console.log(preorderTraversal(root));


root = new Node(1);
root.left = new Node(2);
console.log(preorderTraversal(root));

root = new Node(1);
root.right = new Node(2);
console.log(preorderTraversal(root));