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
                                temp =[];
                        }
                }else{
                        temp.push(head.val);
                        if(head.left != null) queue.push(head.left);
                        if(head.right != null) queue.push(head.right);
                }
        }
        return result; 
}

// var levelOrderTraversal2 = function(root) {
//         if (root == null) {
//                 return [];
//         }
//         let queue = [root]
//         let result = [];
//         let next = [];
//         let subArray = [];
//         while (queue.length) {
//                 let current = queue.shift()
//                 if (current.left) {
//                         next.push(current.left);
//                 }
//                 if (current.right) {
//                         next.push(current.right);
//                 }
//                 subArray.push(current.val);
//                 if (queue.length == 0) {
//                         result.push(subArray);
//                         let data = next;
//                         queue = data;
//                         next = [];
//                         subArray = []
//                 }
//         }
//         return result;
// }

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

