//Build a BST 

//Create a node class that gets added to our tree

class Node {
	constructor(data) {
  	this.data = data;
   	this.left = null; 
    this.right = null;
  }
  getData() {
  	console.log(this.data)
  }
}

let testNode = new Node(2)
//console.log(testNode)

//Create a BST that represents the data structure
class BST {
	constructor() {
  	this.root = null;
    this.size = 0;
  }
  
  insertNode(data) { //2 //1
  	let singleNode = new Node(data) 
    		// 2 //1
    
  	if (this.root === null) {
    	this.root = singleNode;	
      this.size++
    } else {
      let currentNode = this.root;  // = 4 // = 4
      let previousNode = null; 
      
      while(currentNode != null) {
      	previousNode = currentNode 
        		//4 			= 	4 --> briefly the same and then we go to the IF statement INSIDE the WHILE LOOP
            //4     =   4
						//2			=   2
        if (data < currentNode.data) {
        		//2  < 		4
            //1  <    4
            //1  <   2
        	currentNode = currentNode.left
         //currentNode (literal, dumbb) = null
         ///////then our currentNode === null, SO WE HAVE TO EXIT THE WHILE LOOP AND JUMP DOWN TO THE NEXT IF STATEMENT
         //currentNode = 2, previousNode = 4
         //currentNode = null

        } else {
        	currentNode = currentNode.right
        }
      }
  
      if (data < previousNode.data) {
      	// 2   < 		4
        //1    <    2
        	previousNode.left = singleNode
          //my 4's left is set to 2
          //my 2's left is set to 1 
        } else {
        	previousNode.right = singleNode
        }
       this.size++
    }
  }
  deleteNode() {
  
  }
  getTree() {
  
  }
}

let testTree = new BST;
testTree.insertNode(4)
testTree.insertNode(2)
testTree.insertNode(6)
testTree.insertNode(8)
console.log(testTree)
