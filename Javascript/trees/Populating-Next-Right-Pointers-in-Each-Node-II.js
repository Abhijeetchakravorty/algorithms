class Node {
        constructor(val, left, right, next) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
                this.next = (next === undefined ? null : next);
        }
}
var connect = function(root) {
        let prev = null;
        let nextLevelHead = null
        let cur = root
        while (cur) {
                if (cur.left) {
                        if (prev) {
                                prev.next = cur.left
                        }
                        prev = cur.left;
                        if (!nextLevelHead) {
                                nextLevelHead = cur.left
                        }
                }
                if (cur.right) {
                        if (prev) {
                                prev.next = cur.right
                        }
                        prev = cur.right
                        if (!nextLevelHead) {
                                nextLevelHead = cur.right
                        }
                }
                //at the end of the nodes
                if (!cur.next) {
                        cur = nextLevelHead;
                        nextLevelHead = null
                        prev = null;
                } else {
                        cur = cur.next;
                }
        }
        return root;
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(7);
console.log(connect(root));