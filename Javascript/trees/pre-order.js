// root --> left ---> right
// pre order traversal
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var preorderTraversal = function(root) {
        if (root == null) {
                return root;
        }

        let arr = [];
        let nodeStack = [];
        let data = null;
        nodeStack.push(root);
        while(nodeStack.length > 0) {
                data = nodeStack.pop();
                arr.push(data.val);
                if (data.right !== null) {
                        nodeStack.push(data.right);
                }
                
                if (data.left !== null) {
                        nodeStack.push(data.left);
                }
        }
        return arr;
}

let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = preorderTraversal(root);
console.log(data);