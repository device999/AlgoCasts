// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');
function levelWidth(root) {
    
    var parent = [root];
    var kids = [[root.data]]
    var counter = parent.length;
    var tmp = 0;
    var newKids = [];
    while(parent.length){
        const node = parent.shift();        
        tmp = tmp + node.children.length;
        for(let child of node.children){
            newKids.push(child.data);
            parent.push(child);
        }
        counter = counter - 1;
        if(counter==0){
            kids.push(newKids);
            counter = tmp;
            tmp = 0;
            newKids = [];
        }
        
    }
    var answer = []
    while(kids.length){
        const row = kids.shift();        
        if(row.length){
            answer.push(row.length)
        }
    }
    
    return answer;
}

module.exports = levelWidth;
