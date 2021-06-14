// left --> right ---> root
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var levelOrderTraversal = function(root) {
        let levels = [];
        if (!root) {
                return levels;
        }
        const queue = [root];
        while (queue.length) {
                const queueLength = queue.length;
                const level = [];
                for (let i = 0; i < queueLength; i++) {
                        const node = queue.shift();
                        if (node.left) {
                                queue.push(node.left);
                        }
                        if (node.right) {
                                queue.push(node.right);
                        }
                        level.push(node.val);
                }
                levels.push(level);
        }
        return levels;
}

let root = new Node("F");
root.left = new Node("B");
root.right = new Node("G");
root.right.right = new Node("I");
root.right.right.left = new Node("H");
root.left.left = new Node("A");
root.left.right = new Node("D");
root.left.right.left = new Node("C");
root.left.right.right = new Node("E");
console.log(levelOrderTraversal(root));