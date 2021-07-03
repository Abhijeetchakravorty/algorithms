// ROOT ---> LEFT ----> RIGHT
class Node  {
    constructor(val, left, right) {
            this.val = (val === undefined ? null : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}

var preorderTraversal = function(root) {
    let result = [];
    dfs(root);
    
    function dfs(root) {
        if(root != null){
            result.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
    }
    return result;
}

let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = preorderTraversal(root);
console.log(data);