// LEFT ----> RIGHT -----> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? null : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var postorderTraversal = function(root) {
        let result = [];
        let nodeStack = [];
        let p = root;
        while(nodeStack.length > 0 || p !== null) {
                if(p != null) {
                        nodeStack.push(p);
                        result.unshift(p.val);   // Reverse the process of preorder
                        p = p.right;             // Reverse the process of preorder
                } else {
                        let node = nodeStack.pop();
                        p = node.left;           // Reverse the process of preorder
                }
        }
        return result;
}

let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = postorderTraversal(root);
console.log(data);