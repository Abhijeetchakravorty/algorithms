///// LEFT --> RIGHT ---> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

function buildTree(inorder, postorder) {
        const inorderMap = {}
        for (let i = 0; i < inorder.length; i++) {
                inorderMap[inorder[i]] = i
        }
        return tree(0, inorder.length - 1, postorder, inorderMap)
        // return buildTreeReq(postorder, inorderMap, 0, inorder.length - 1)
}

function buildTreeReq(postorder, inMap, s, e) {
        if (s > e) return null
        const val = postorder.pop()
        const node = new Node(val)
        const inorderIdx = inMap[val]
        node.rigth = buildTreeReq(postorder, inMap, inorderIdx + 1, e)
        node.left = buildTreeReq(postorder, inMap, s, inorderIdx - 1)
        return node
}

function tree(s, e, postorder, inMap) {
        if (s > e) return null
        const val = postorder.pop()
        const node = new Node(val)
        const idx = inMap[val]
        node.right = tree(idx + 1, e, postorder, inMap)
        node.left = tree(s, idx - 1, postorder, inMap)
        return node
}
let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
let data = buildTree(inorder, postorder);
console.log(data);