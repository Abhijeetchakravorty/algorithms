///// LEFT --> RIGHT ---> ROOT
class Node {
        constructor(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
        }
}

var levelOrderTraversal = function(root) {
        let queue = [];
        let result = [];
        let temp = [];
        if(root != null) {
                queue.push(root);
                queue.push('X');
        }
        
        while(queue.length != 0){
                let head = queue.shift();
                if(head == 'X'){
                        result.push(temp);
                        if(queue.length > 0){
                                queue.push('X');
                                temp = [];
                        }
                } else {
                        temp.push(head.val);
                        if(head.left != null) queue.push(head.left);
                        if(head.right != null) queue.push(head.right);
                }
        }
        return result; 
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

