///// LEFT --> RIGHT ---> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}
var buildTree = function(preorder, inorder) {
        const idx_map = {}
        for (let i = 0; i < inorder.length; i++) {
            idx_map[inorder[i]] = i
        }
        return helper(0, preorder.length - 1, preorder, idx_map)
    };
    
function helper(left, right, preorder, idx_map) {
        if (left > right) {
            return null;
        }
        const nodeVal = preorder.shift()
        const root = new Node(nodeVal)
        const preorderIdx = idx_map[nodeVal]
        root.left = helper(left, preorderIdx - 1, preorder, idx_map)
        root.right = helper(preorderIdx + 1, right, preorder, idx_map)
        return root
}
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
let data = buildTree(preorder, inorder);
console.log(data);