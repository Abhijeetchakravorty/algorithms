// left --> root --> right
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0: val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var inorderTraversal = function(root) {
        let arr = [];
        let nodeStack = [];
        let mainNode = null;
        while (root !== null || nodeStack.length !== 0) {
                let temp = root;
                if (temp.left !== null) {
                        nodeStack.push(temp.left);
                        mainNode = nodeStack.pop();
                        arr.push(mainNode.val);
                        temp.left = null;
                        root = temp;
                } else {
                        nodeStack.push(temp);
                        mainNode = nodeStack.pop();
                        arr.push(mainNode.val);
                        if (temp.right !== null) {
                                root = temp.right;
                                temp.right = null;
                        } else {
                                root = null;
                        }
                }
        }
        return arr;
}

let root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);
console.log(inorderTraversal(root));


root = new Node(1);
root.left = new Node(2);
console.log(inorderTraversal(root));


root = new Node(1);
root.right = new Node(2);
console.log(inorderTraversal(root));