// left --> root --> right
class Node {
    constructor(val, left, right) {
            this.val = (val === undefined ? 0: val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}

var inorderTraversal = function(root) {
    let result = [];
    dfs(root);
    
    function dfs(root) {
        if(root != null) {
            dfs(root.left);
            result.push(root.val);
            dfs(root.right);
        }
    }
    
    return result;
}

let root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(3);
console.log(inorderTraversal(root));

// root = new Node(1);
// root.left = new Node(2);
// console.log(inorderTraversal(root));


// root = new Node(1);
// root.right = new Node(2);
// console.log(inorderTraversal(root));


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.left.left = new Node(5);
inorderTraversal(root);