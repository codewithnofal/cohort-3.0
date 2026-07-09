class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let myLinkedList = () => {
  this.head = null;
  this.size = 0;
};

myLinkedList.prototype.addAtHead = (val) => {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

