// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    debugger;
    if(!list.head || !list.head.next){
        return false;
    }
    var slowMode = 0;
    var fastMode = 1;

    var slow = list.getAt(slowMode);
    var fast = list.getAt(fastMode);    
    while(slow.data!==fast.data){
        if(!fast.next.next){
            return false;
        }else{
            slowMode = slowMode+1;
            fastMode = fastMode+2;
            slow = list.getAt(slowMode);
            fast = list.getAt(fastMode);
        }
    }
    return true;
}

module.exports = circular;
