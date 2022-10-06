// LIFO - last in; first out
// METHODS
    //pop method --> remove last item in stack
    //push method --> add item to stack
    //peek method --> look at last item in stack
//REAL LIFE EXAMPLES
    // Undo, back button, command-z
// GENERAL
    //think js call stack b/c javascript is synchronous(one-track mind)

class Stack {
    constructor(maxSize) {
        if (isNaN(maxSize)) {
            maxSize = 10;
        }
        /*
        if maxSize is not a number --> true
        if maxSize is a number --> false
        so if the following is true and it is not a number make maxSize this number
        */
       this.maxSize = maxSize;
       this.container = []; //making our Stack with an Array

    }
    add(data) {
        if (this.container.length >= this.maxSize) {
            console.log("Stack overflow, there is no more room in this stack.") 
            return
        }
        return this.container.push(data);
    }
    remove() {
        if (this.container.length === 0) {
            console.log("Stack underflow, this stack is empty.")
            return
        }
        return this.container.pop();
    }
    peek() {
        console.log(this.container[this.container.length-1])
        return
    }
 	viewAll() {
        console.log(this.container)
        return
    }
}

let testS = new Stack();
testS.remove();
testS.add("meow")
testS.add("cow")
testS.add("mocha")
testS.peek()
testS.viewAll()