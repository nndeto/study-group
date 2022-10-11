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

        append(data) {
            // make a new node
            let newNode = new Node(data)
            console.log(newNode)

            // check for head and if no head, the new node becomes the node
            if (this.head === null) {
                this.head = newNode
                return
            }

            // else search the LL till you find the last node(next = null)
            let currentNode = this.head
            while(currentNode.next != null) { //while there are nexts continue
                currentNode = currentNode.next
            }

            // add the new node to the end of the last node
            currentNode.next = newNode
        }

        print() {
            // check for head, if none, do nothing
            if(this.head === null) {
                console.log("The linked list is empty.")
                return
            }

            // else go ahead and print the data
            let currentNode = this.head
            while(currentNode != null ) {
                console.log(currentNode.data)
                currentNode = currentNode.next //keeps the loop moving
                
            }
        }
    }