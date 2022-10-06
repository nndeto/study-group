// FIFO - first in; first out
// METHODS
    // enqueue method --> add item to queue
    // dequeue method --> remove item from queue
    // view whole queue --> view all queue
    // peek method --> look at first item in queue
//REAL LIFE EXAMPLES
    //sending an email
    //server while responding to request

class Queue {
    constructor(maxSize) {
        if (isNaN(maxSize)) {
            maxSize =  25;
        }
        /*
        if maxSize is not a number --> true
        if maxSize is a number --> false
        so if the following is true and it is not a number make maxSize this number
        */
        this.maxSize = maxSize;
        this.container = [];
    }
    enqueue(item) {
        if (this.container.length < this.maxSize) {
           return this.container.push(item)
        } else {
            console.log("this line is full")
        }
    }
    dequeue() {
        if (this.container.length > 0) {
            return this.container.shift()
        } else {
            console.log("this line is empty, I can't give you anything")
        }
    }
    viewAll() {
        console.log(this.container)
        return
    }
    peek() {
        if (this.container.length > 0) {
            console.log(this.container[0])
        }
        return
    }
}

let testQ = new Queue(17)
testQ.enqueue("hello")
testQ.enqueue("h")
testQ.enqueue("ello")
testQ.enqueue("hlo")
testQ.enqueue("hlo")
testQ.viewAll()
console.log(testQ.dequeue())
testQ.peek()