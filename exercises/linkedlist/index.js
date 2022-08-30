// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null){
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){ 
        if(this.head === null){
            this.head =  new Node(data);
        }else{
            const oldHead = this.head;
            this.head = new Node(data,oldHead);
        }
        
    }

    insertFirstTutorial(data){
        this.head = new Node(data,this.head);         
     }

    sizeTutorial(){
        let counter=0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    size(){
        if(this.head === null){
            return 0;
        }else if(this.head.next ===null){
            return 1;
        }else{
            var node = this.head;
            var counter = 1;
            while(node.next!==null){
                counter++;
                node = node.next;
            }
            return counter;
        }
    }
    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return;
        }
        let node = this.head;
        while(node){
            if(node.next==null){
                return node;
            }
            node = node.next;
        }
    }

    clear(){
        this.head=null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        let nextNode = this.head.next;
        this.head = nextNode;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return this.head;
        }
        let currNode = this.head;
        let nextNode = currNode.next;
        while(nextNode){
            if(!nextNode.next){
                currNode.next = null;
                return this.head;
            }
            currNode = nextNode;
            nextNode = nextNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
