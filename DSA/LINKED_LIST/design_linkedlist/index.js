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

myLinkedList.prototype.addAtTail = (val) => {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

myLinkedList.prototype.addAtIndex = (index, val) => {
  let newNode = new Node(val);

  if (index < 0 || index > this.size) return;

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

