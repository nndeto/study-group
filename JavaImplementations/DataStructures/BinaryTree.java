package JavaImplementations.DataStructures;

public class BinaryTree {
    
    private class Node {
        int data;

        // pointers to left and right children
        Node left;
        Node right;

        public Node (int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    Node root;
    private int size;

    public BinaryTree () {
        this.root = null;
    }

    public void insert(int element) {
        if (this.size == 0) {
            root = new Node(element);
        } else {
            insertHelper(root, element);
        }
        size++;
    }

   private void insertHelper(Node root, int element) {
        if (element < root.data) {
            if (root.left == null) {
                root.left = new Node(element);
            } else {
                insertHelper(root.left, element);
            }
        } else {
            if (root.right == null) {
                root.right = new Node(element);
            } else {
                insertHelper(root.right, element);
            }
        }
    }

    public int height() {
        return heightHelper(this.root);
    }

    //Compute the height of the tree which is the length of the 
    // the longest path from the root.
    private int heightHelper(Node root) {
        if (root == null) {
            return 0;
        } else {
            int leftHeight = heightHelper(root.left);
            int rightHeight = heightHelper(root.right);

            // root has height 1
            return 1 + Math.max(leftHeight, rightHeight);
        }
    }

    public int size() {
        return size;
    }

    public String inorder() {
        return inorderHelper(root);
    }

    public String inorderHelper(Node root) {
        if (root == null) {
            return "";
        }
        
       /*  String returnString = "";
        returnString += " " + inorderHelper(root.left);
        returnString += " " + root.data;
        returnString += " " + inorderHelper(root.right);
        return returnString; */
        
        return inorderHelper(root.left) +
               " " + root.data +
               " " + inorderHelper(root.right);
    }

    public static void main(String args[]) {
        BinaryTree myTree = new BinaryTree();
        myTree.insert(8);
        System.out.println(myTree.height());
        myTree.insert(4);
        myTree.insert(12);
        myTree.insert(2);
        myTree.insert(5);
        myTree.insert(10);
        myTree.insert(20);
        myTree.insert(18);
        myTree.insert(22);
        System.out.println(myTree.height());
        System.out.println(myTree.size());

        System.out.println(myTree.inorder());
    }
}
