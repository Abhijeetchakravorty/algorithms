class Node {
    constructor(val) {
            this.val = (val === undefined ? 0 : val);
            this.left = this.right = null;
    }
}
var serialize = function(root) {
    // console.log(root)
    function traversal(node) {
            if (!node) {
                    return "#";
            }
            let left = traversal(node.left);
            let right = traversal(node.right);
            return `${node.val},${left},${right}`;
    }
    const serialized = traversal(root);
    // console.log("serialized", serialized)
    return serialized;
};
var deserialize = function(data) {
    console.log("data", data);
    const list = data.split(",");
    let index = 0;

    function reversal(serialized) {
            if (serialized[index] === "#") {
                    return null;
            }
            const node = new Node(serialized[index]);
            index++;
            const left = reversal(serialized)
            index++;
            const right = reversal(serialized)
            node.left = left;
            node.right = right;
            return node;
    }
    // console.log("list", list)
    const deserialized = reversal(list);
    // console.log(deserialized);
    return deserialized;
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

console.log(serialize(root));
console.log(deserialize(serialize(root)));