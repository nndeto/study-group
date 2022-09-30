// FIFO - first in; first out
// METHODS
    // enqueue method --> add item to queue
    // dequeue method --> remove item from queue
    // view whole queue --> view all queue
    // peek method --> look at first item in queue
    

class Queue {
    constructor(maxSize) {
        if (isNaN(maxSize)) {
            maxSize =  25;
        }
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
    }
    peek() {
        if (this.container.length > 0) {
            console.log(this.container[0])
        }
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