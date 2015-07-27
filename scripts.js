// Linked lists

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
}
function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
     currNode = currNode.next;
  }
  return currNode;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
   }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
      currNode = currNode.next;
   }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function advance(item, n) {
  var current = this.find(item);
  console.log(current);
  var counter = 0;
  var nextNode = current.next;
  var prevNode = current.previous;
  console.log(nextNode);
  while (counter < n) {
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
    current.next = nextNode.next;
    nextNode.next = current;
    counter++;
  }
}


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.advance("Conway", 3);
cities.display();