// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree



class Node {
    constructor(data, children = null){
        this.data = data;
        if(children){
            this.children = children;
        }else{
            this.children = []
        }
    }

    add(data){
        if(!this.data){
            this.data = data;
        }else{
            var newNode = new Node(data);
            this.children.push(newNode);
        }
    }
    remove(data){
        if(!this.data){
            return;
        }
        if(this.data!==data && this.children.length==0){
            return;
        }
        this.children = this.children.filter(node =>{
            return node.data !== data;
        })
    }
}

/*
const n = new Node1('a');
n.add('b');
n.add('c');
n.remove('b');
*/

class Tree {
    constructor(){
            this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            for(let child of node.children){
                arr.push(child);
            }
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
