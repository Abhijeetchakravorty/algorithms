///// LEFT --> RIGHT ---> ROOT
class Node {
    constructor(val, left, right) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
    }
}




var hasPathSum = function(root, targetSum) {
    if (!root) return false
    
    if(!root.left && !root.right) return root.val === targetSum
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

let root = new Node(5);
root.left = new Node(4);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);

root.right = new Node(8);
root.right.right = new Node(4);
root.right.right.right = new Node(1);
root.right.left = new Node(13);
console.log(hasPathSum(root, 22));
