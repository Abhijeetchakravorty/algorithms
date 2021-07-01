class Node {
        constructor(val, left, right, next) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
                this.next = (next === undefined ? null : next);
        }
}
var connect = function(root) {
        if(root === null) return root
    
        const levels = []
        let ans = []
        const q = []
        q.push({ node: root, level: 0 })
        
        while(q.length > 0) {
                const shifted = q.shift()
                const { node, level } = shifted
                if(!levels[level]) levels[level] = []
                levels[level].push(node)
                
                if(node.left) q.push({ node: node.left, level: level + 1})
                if(node.right) q.push({ node: node.right, level: level + 1 })
        }
        for(let i=0;i<levels.length;i++) {
                for(let j=0;j<levels[i].length;j++) {
                levels[i][j].next = levels[i][j+1] ? levels[i][j+1] : null
                }
        }
    
        return root
};

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(connect(root));