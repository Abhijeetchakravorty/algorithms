var Node = function(val) {
    this.val = val;
    this.left = this.right = null;
}
const lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    return !left ? right : !right ? left : root;
};
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