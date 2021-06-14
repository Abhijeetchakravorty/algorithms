// left --> root --> right
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
        while (nodeStack.length > 0) {
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