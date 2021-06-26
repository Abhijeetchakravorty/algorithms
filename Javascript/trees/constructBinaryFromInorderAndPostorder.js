///// LEFT --> RIGHT ---> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

function* enumerate(array) {
        for (let i = 0; i < array.length; i += 1) {
                yield [i, array[i]];
        }
}

var buildTree = function(inorder, postorder) {
        let map_inorder = {}
        for (let x of enumerate(inorder)) {
                map_inorder[x[1]] = x[0]
        }

        function recur(low, high) {
                if (low > high) {
                        return null;
                }
                let data = postorder.pop();
                let x = new Node(data);
                let mid = map_inorder[x.val]
                x.right = recur(mid + 1, high)
                x.left = recur(low, mid - 1)
                return x
        }
        return recur(0, inorder.length - 1)
}
let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
let data = buildTree(inorder, postorder);
console.log(data);