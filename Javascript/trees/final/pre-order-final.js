// ROOT ---> LEFT ----> RIGHT
class Node  {
        constructor(val, left, right) {
                this.val = (val === undefined ? null : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var preorderTraversal = function(root) {
        /// pre order traversal
        /// ROOT -----> LEFT -----> RIGHT
        let nodeStack = [];
        let list = [];
        let data = null;
        nodeStack.push(root);
        while(nodeStack.length > 0) {
                data = nodeStack.pop();
                list.push(data.val);
                if (data.right !== null) {
                        nodeStack.push(data.right);
                }

                if (data.left !== null) {
                        nodeStack.push(data.left);
                }
        }
        return list;
}

let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = preorderTraversal(root);
console.log(data);