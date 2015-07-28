// Linked lists
// #1
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
  var counter = 0;
  while (counter < n) {
    var items = this.find(item);
    if (items.next != null) {
      var current = items.next.element
      
    } else {
      console.log("can't move element, the number you entered exceeded the number of elements in a list")
    }
    
    this.remove(item);
      this.insert(item, current);
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

// #2

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
  this.back = back;
  this.insertAfter = insertAfter;
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
  console.log(currNode);
}

function insert(newElement, item) { 
  var newNode = new Node(newElement); 
  var current = this.find(item); 
  newNode.next = current.next; 
  newNode.previous = current; 
  current.next = newNode;
}

function insertAfter(newElement, item) { 
  var newNode = new Node(newElement); 
  var current = this.find(item); 

  newNode.previous = current.previous; 
  newNode.next = current; 
  if(newNode.previous != null) {
    newNode.previous.next = newNode;  
  } else {
    console.log("can't move element, the number you entered exceeded the number of elements in a list")
  }
  current.previous = newNode;
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next; 
    currNode.next.previous = currNode.previous; 
    currNode.next = null;
    currNode.previous = null;
  }
}

function back(item, n) {  
  var counter = 0;
  while (counter < n) {
    var items = this.find(item);
    var current = items.previous.element;
    this.remove(item);
    this.insertAfter(item, current);
    counter++;
  }
}


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.back("Carlisle", 3);
cities.display();

// #3

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
  this.show = show;
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
  console.log(currNode);
}

function insert(newElement, item) { 
  var newNode = new Node(newElement); 
  var current = this.find(item); 
  newNode.next = current.next; 
  newNode.previous = current; 
  current.next = newNode;
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next; 
    currNode.next.previous = currNode.previous; 
    currNode.next = null;
    currNode.previous = null;
  }
}

function show(item) {
  var currNode = this.find(item);
  console.log("element:",currNode.element);
  console.log("next Node:",currNode.next.element);
  console.log("previous Node:",currNode.previous.element);
}



var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.show("Carlisle");
cities.display();

// 4

// function Node(element, grades) {
//   this.element = element;
//   this.next = null;
//   this.previous = null;
//   this.grades = grades;
// }
// function LList() {
//   this.head = new Node("head");
//   this.find = find;
//   this.insert = insert;
//   this.display = display;
//   this.findPrevious = findPrevious;
//   this.remove = remove;
// }

// function findPrevious(item) {
//   var currNode = this.head;
//   while (!(currNode.next == null) &&
//         (currNode.next.element != item)) {
//      currNode = currNode.next;
//   }
//   return currNode;
// }

// function display() {
//   var currNode = this.head;
//   while (!(currNode.next == null)) {
//       console.log(currNode.next.element);
//       console.log(currNode.next.grades);
//       currNode = currNode.next;
//    }
// }

// function find(item) {
//   var currNode = this.head;
//   while (currNode.element != item) {
//       currNode = currNode.next;
//    }
//   return currNode;
//   console.log(currNode);
// }

// function insert(newElement, item) { 
//   var arrOfGrades = newElement.split(',');
//   var newNode = new Node(newElement, arrOfGrades); 
//   var current = this.find(item); 
//   newNode.next = current.next; 
//   newNode.previous = current; 
//   current.next = newNode;
// }

// function remove(item) {
//   var currNode = this.find(item);
//   if (!(currNode.next == null)) {
//     currNode.previous.next = currNode.next; 
//     currNode.next.previous = currNode.previous; 
//     currNode.next = null;
//     currNode.previous = null;
//   }
// }

// var cities = new LList();
// cities.insert("1,2,3,4", "head");
// cities.insert("3,5,6,7", "1,2,3,4");
// cities.insert("5,6,7,4,3", "3,5,6,7");
// cities.insert("4,5,6,7,4", "5,6,7,4,3");

// cities.display();

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
  this.showNext = showNext;
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
  console.log(currNode);
}

function insert(newElement, item) { 
  var newNode = new Node(newElement); 
  var current = this.find(item); 
  newNode.next = current.next; 
  newNode.previous = current; 
  current.next = newNode;
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next; 
    currNode.next.previous = currNode.previous; 
    currNode.next = null;
    currNode.previous = null;
  }
}

function showNext(item) {
  var currNode = this.find(item);
  console.log(currNode.next.element);
}

var cities = new LList();
cities.insert("1,2,3,4", "head");
cities.insert("3,5,6,7", "1,2,3,4");
cities.insert("5,6,7,4,3", "3,5,6,7");
cities.insert("4,5,6,7,4", "5,6,7,4,3");
cities.showNext("1,2,3,4");
cities.display();

// 5

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
  this.showPrev = showPrev;
  this.showNext = showNext;
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
  console.log(currNode);
}

function insert(newElement, item) { 
  var newNode = new Node(newElement); 
  var current = this.find(item); 
  newNode.next = current.next; 
  newNode.previous = current; 
  current.next = newNode;
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next; 
    currNode.next.previous = currNode.previous; 
    currNode.next = null;
    currNode.previous = null;
  }
}

function showPrev(item) {
  var currNode = this.find(item);
  console.log(currNode.previous.element);
}

function showNext(item) {
  var currNode = this.find(item);
  console.log(currNode.next.element);
}

var cities = new LList();
cities.insert("1,2,3,4", "head");
cities.insert("3,5,6,7", "1,2,3,4");
cities.insert("5,6,7,4,3", "3,5,6,7");
cities.insert("4,5,6,7,4", "5,6,7,4,3");
cities.showPrev("3,5,6,7");
cities.showNext("3,5,6,7");
cities.display();

// 6
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
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
  while (!(currNode.next == null) &&
              !(currNode.next.element == "head")) {
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


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");

cities.display();