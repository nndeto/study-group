package JavaImplementations.DataStructures;
import java.util.ArrayList;

public class Queue {

    ArrayList<String> list;
    int size;
    int limit = 8;

    public Queue() {
        this.list = new ArrayList<String>();
        this.size = list.size();
    }

    //add element to the back of the list
    public void enqueue(String name) {
        if (!this.isFull()) {
            list.add(name);
            size++;
        }
    }

    //remove elements from the front to adhere to FIFO property 
    public String dequeue() {
        if (!this.isEmpty()) {
            String element = list.get(0);
            list.remove(0);
            size--;
            return element;
        }
        return "";
    }

    public boolean isFull() {
        if (size == limit) {
            return true;
        } else {
            return false;
        }    
    }

    public boolean isEmpty() {
        if (size == 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        String str = "";
        for (String person : list) {
            str = str + " " + person;
        }
        return str;
    }

    public static void main(String[] args) {
        Queue myQ = new Queue();

        if (myQ.isEmpty())
            System.out.println("The line is empty.");
        else
            System.out.println("The line is not empty.");
        
        myQ.enqueue("Ally");
        myQ.enqueue("Dana");
        myQ.enqueue("Jacob");
        myQ.enqueue("Calvin");
        myQ.enqueue("Mike");

        System.out.println(myQ.toString());

        String outOfLine = myQ.dequeue();
        System.out.println(outOfLine);
        System.out.println(myQ.toString());

        myQ.enqueue("Ally");
        myQ.enqueue("Janet");
        myQ.enqueue("Jason");
        myQ.enqueue("Charles");

        myQ.enqueue("Kiki");
        System.out.println(myQ.toString());
    }
}
