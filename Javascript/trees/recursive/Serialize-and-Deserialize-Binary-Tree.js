class Node {
        constructor(val) {
                this.val = (val === undefined ? 0 : val);
                this.left = this.right = null;
        }
}
var serialize = function(root) {
        function postOrder(node) {
                if (!node) return '#';
                let left = postOrder(node.left);
                let right = postOrder(node.right);
                return left + ',' + right + ',' + node.val;
        }
        return postOrder(root);
};
var deserialize = function(data) {
        let dataArr = data.split(',');

        function postOrder(dataArr) {
                if (dataArr.length === 0) return null;
                let val = dataArr.pop();
                if (val === '#') return null;
                let right = postOrder(dataArr);
                let left = postOrder(dataArr);
                let res = new Node(parseInt(val), left, right);
                return res;
        }
        let res = postOrder(dataArr);
        return res;
};
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
console.log(serialize(root));
console.log(deserialize(serialize(root)));