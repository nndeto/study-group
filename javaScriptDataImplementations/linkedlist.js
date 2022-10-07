
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(data=null);
        this.size = 0;
    }

    append(data) {
        //1. create new node to be added
        var node_to_add = new Node(data);

        //2. create a pointer (reference) to the head node
        // ie store the current node
        var current = this.head

        //3.iterate to end of the list to find the last node
        while (current.next != null) {
            current = current.next;
        }
        
        //4. add the last node by making the current last node's
        // next point to the new node to add
        current.next = node_to_add;
        this.size++;
    }
}