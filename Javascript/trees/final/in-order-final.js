// left --> root --> right
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0: val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var inorderTraversal = function(root) {
        if (!root) {
                return []
            }
            let current = root
            const result = []
            const stack = []
        
            while (current || stack.length) {
                if (current) {
                    stack.push(current)
                    current = current.left
                }
                else {
                    current = stack.pop()
                    result.push(current.val)
                    current = current.right
                }
            }
        
        return result
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