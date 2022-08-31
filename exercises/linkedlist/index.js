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

    insertLast(data){
        if(!this.head){
            return this.head = new Node(data)
        }
        if(!this.head.next){
            this.head.next = new Node(data);
            return this.head;
        }
        let currNode = this.head;
        let nextNode = currNode.next;
        while(nextNode){
            if(!nextNode.next){
                nextNode.next = new Node(data);
                return this.head;
            }
            currNode = nextNode;
            nextNode = nextNode.next;
        }
    }

    getAt(counter){
        if(counter === 0){
            return this.head;
        }
        var cons = 0;
        var node = this.head;
        while(cons!= counter){            
            if(node){
                cons++;
                node = node.next;
            }else{
                return null;
            }            
        }
        return node;
    }

    removeAt(cnt){
        if(!this.getAt(cnt)){
            return;
        }
        if(cnt===0){
            this.removeFirst();
            return;
        }
        var prevNode = this.getAt(cnt-1);
        var nextNode = this.getAt(cnt+1);
        prevNode.next = nextNode;
    }

    insertAt(data,pos){
        if(!this.head || pos === 0 || this.size()===0){
            this.insertFirst(data);
            return;
        }
        if(!this.getAt(pos-1)){
            this.insertLast(data);
            return;
        }
        if(!this.getAt(pos+1)){
            this.insertLast(data);
            return;
        }

        var prevNode = this.getAt(pos-1);
        var currNode = this.getAt(pos);
        var newNode = new Node(data,currNode);
        prevNode.next = newNode;
        return;
    }

    forEach(fn) {
        if (!this.head) {
          return null;
        }
    
        let node = this.head;
        while (node) {
          fn(node);
          node = node.next;
        }
      }

      *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}

module.exports = { Node, LinkedList };
