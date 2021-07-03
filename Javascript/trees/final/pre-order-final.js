// ROOT ---> LEFT ----> RIGHT
class Node  {
        constructor(val, left, right) {
                this.val = (val === undefined ? null : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var preorderTraversal = function(root) {
        let stack=[];
    let res=[];
    
    if(root == null){
        return [];
    }
    
    stack.push(root);
    while(stack.length !== 0){
        let node = stack.pop();
        res.push(node.val);
        if(node.right !== null){
            stack.push(node.right);
        }
        if(node.left !== null){
            stack.push(node.left);
        }
    }
    return res;
}

let root = new Node(1);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
let data = preorderTraversal(root);
console.log(data);