package JavaImplementations.DataStructures;

public class LinkedList {

    private class Node {

        private String data;
        //reference to the next node; ie, a shallow copy. 
        private Node next; 

        public Node(String data) {
            this.data = data;
            this.next = null;
        }

        public String getData() {
            if (this.data == null) {
                return "";
            } else {
                return this.data;
            }
        }
    }

    Node head;
    int size;

    public LinkedList(){
        this.head = new Node(null);
    }

    //adds node to back of the list
    public void append(String data) {
        Node nodeToAdd = new Node(data);
        Node current = head;

        while(current.next != null) {
            current = current.next;
        }

        //current.next is now null so
        // we have reached end of the loop

        //what was the last node's next
        //pointed to null but now points to 
        // the new node
        current.next = nodeToAdd;
        size++;
    }

    public void appendFront(String data) {
        Node nodeToAdd = new Node(data);
        Node current = head;

        nodeToAdd.next = current.next;
        current.next = nodeToAdd;
        size++;
    }

    public void removeLast() {
        if (!this.isEmpty()) {
            Node current = head;
            Node prev = null;

            while (current.next != null) {
                prev = current;
                current = current.next;
            
            }
            //we have found the last node
            // set the previous node's next to null
            prev.next = null;
            size--;
        }
    }

    public void removeFront() {
        if (!this.isEmpty()) {
            Node current = head;
            Node firstNode = current.next;

            current.next = firstNode.next;
            firstNode.next = null;
            size--;
        }
    }

    // peek at the first node but do not remove it
    public String first() {
        Node firstNode = head.next;
        return firstNode.getData();
    }

    //peak at the last node but to do not remove it
    public String last() {
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        return current.getData();
    }

    public boolean isEmpty() {
        if (size == 0) {
            return true;
        }
        return false;
    }

    public int size() {
        return this.size;
    }

    public String toString() {
        Node current = head;
        String str = "";
        while (current != null) {
            str = str + " " + current.getData();
            current = current.next;
        }
        return str;
    }
    
    public static void main(String args[]) {
        LinkedList myList = new LinkedList();

        if (myList.isEmpty())
            System.out.println("The list is empty.");
        else
            System.out.println("The list is not empty.");

        myList.append("Sarah");
        System.out.println(myList.toString());
        System.out.println(myList.size());
        myList.append("Susan");
        myList.append("Ally");
        myList.append("Jason");

        System.out.println(myList.toString());
        System.out.println(myList.first());
        System.out.println(myList.last());

        myList.removeLast();
        System.out.println(myList.toString());
        myList.removeFront();
        System.out.println(myList.toString());
        System.out.println(myList.first());
        System.out.println(myList.size());

        myList.appendFront("Nicole");
        System.out.println(myList.toString());
    }
}
