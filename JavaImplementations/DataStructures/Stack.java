package JavaImplementations.DataStructures;
import java.util.ArrayList;

/* A stack is a linear data structure that follows a
 * last in first out (LIFO) protocol.
 * 
 * This is the arrayList implementation of a Stack in Java.
 */

public class Stack {

    //instance variables
    ArrayList<Integer> list;
    int size;
    int limit = 8;

    //constructor
    public Stack ()  {
        this.list = new ArrayList<Integer>();
        this.size = list.size();
    }

    
    public int peek() {
        //the last element in the list will be the top of the stack
        int lastElementIndx = list.size() - 1;
        return list.get(lastElementIndx);
    }

    public void push(int element) {
        if (this.hasSpace())
            list.add(element);
            size++;
    }

    public int pop() {
        int lastElementIndx = list.size() - 1;
        int lastElement = list.get(lastElementIndx);
        list.remove(lastElementIndx);
        size--;
        return lastElement;
    }

    public boolean isEmpty(){
        if (size == 0)
            return true;
        else 
            return false;
    }

    public boolean hasSpace() {
        if (size < limit)
            return true;
        else
            return false;
    }

    public String toString() {
        String str = "";
        for (int el : list) {
            str = str + " " + String.valueOf(el);
        }
            return str;
        }

public static void main(String [] args) {
    Stack myStack = new Stack(); 

    if (myStack.isEmpty()) 
        System.out.println("The stack is empty.");
    else 
        System.out.println("The stack is not empty.");
    
    myStack.push(4);
    myStack.push(5);
    myStack.push(6);
    myStack.push(7);
    myStack.push(8);

    if (myStack.isEmpty()) 
        System.out.println("The stack is empty.");
    else 
        System.out.println("The stack is not empty");

    System.out.println(myStack.toString());

    int top = myStack.pop();
    System.out.println(top);
    System.out.println(myStack.toString());
    System.out.println(myStack.peek());

    myStack.push(9);
    myStack.push(10);
    myStack.push(11);
    myStack.push(12);

    System.out.println(myStack.hasSpace());
  }
}
