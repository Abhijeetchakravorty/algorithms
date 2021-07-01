class Node {
    constructor(val, left, right, next) {
            this.val = (val === undefined ? 0 : val);
            this.left = this.right = null;
    }
}

var lowestCommonAncestor = function(root, p, q) {
    var ans = null;
    var recursive_tree = function(curr_node) {
        if (curr_node === null) {
            return curr_node;
        }
        
        let left = recursive_tree(curr_node.left);
        let right = recursive_tree(curr_node.right);
        let mid = (curr_node == p || curr_node == q);
        if (mid+left+right >= 2) {
            ans = curr_node;
        }
        return (mid || left || right);
    }
    recursive_tree(root);
    return ans;
}



let root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.left.right.right = new Node(4);
root.left.right.left = new Node(7);
root.right.right = new Node(8)
root.right.left = new Node(0);
console.log(lowestCommonAncestor(root, 5, 1));


