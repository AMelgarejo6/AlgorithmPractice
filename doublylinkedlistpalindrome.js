class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

isPalindrome(dll) {
    var frontRunner = this.head;
    var backRunner = this.tail;
    while(frontRunner != null){
        if(frontRunner.data == backRunner.data){
            if(frontRunner.next == backRunner || frontRunner == backRunner){
                return true;
            }
            frontRunner = frontRunner.next;
            backRunner = backRunner.prev;
        }
        else{
            return false;
        }
    }
}
// push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }
}

// instantiate the DLL()
var myCoolDLL = new DLList();

// add a few DLLNodes:
myCoolDLL.addHead(new DLLNode("a"))
myCoolDLL.addHead(new DLLNode("a"))
myCoolDLL.addHead(new DLLNode("b"))
// console.log(myCoolDLL);
// ---- test new methods:
console.log(myCoolDLL.isPalindrome())
// myCoolDLL.reverse()
// console.log(myCoolDLL);