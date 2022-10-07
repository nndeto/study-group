// Linear Data Structure
// METHODS
    //appendData --> adds nodes to the LL
    //print --> look at the LL
    //insertAt(index) --> insert node at a specific index
    //removeFrom(index) --> removes node at a specific index
    //getNode(index) --> returns node from specified index
    //clear --> empties a LL by making head point towards null
//REAL LIFE EXAMPLES
    // Undo, back button, command-z
// GENERAL
    //Dynamic growing or shrinking based on user requirements
    //Constant time insertion and Deletion
    //Can only be accessed in sequence from bebinning to end

    class Node { //nodes are the data and pointer of what's next 
        constructor(data) {
            this.data = data
            this.next = null //starts out as null so that it's always the tail node unless another node is added to the LL
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
        }
    }