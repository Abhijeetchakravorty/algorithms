// LEFT ----> RIGHT -----> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? null : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var postorderTraversal = function(root) {
        /// postorder traversal
        /// LEFT ----> RIGHT ----> ROOT
        let result = [];
        let nodeStack = [];
        let data = root;
        while(data !== null || nodeStack.length > 0){ 
                if (data !== null) {
                        nodeStack.push(data);
                        result.unshift(data.val);
                        data = data.right;
                } else {
                        let node = nodeStack.pop();
                        data = node.left;
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