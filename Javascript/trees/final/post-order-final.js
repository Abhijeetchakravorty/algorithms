// LEFT ----> RIGHT -----> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? null : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var postorderTraversal = function(root) {
        let list = [];
        let nodeStack = [];
        let data = null;
        nodeStack.push(root);
        while(nodeStack.length > 0) {
                data = nodeStack.pop();
                list.unshift(data.val);
                if (data.left !== null) {
                        nodeStack.push(data.left);
                }

                if (data.right !== null) {
                        nodeStack.push(data.right);
                }
        }
        return list;
}

let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = postorderTraversal(root);
console.log(data);