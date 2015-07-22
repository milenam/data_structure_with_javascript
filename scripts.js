// #1

function Dequeue() { 
  this.dataStore = []; 
  this.enqueue = enqueue; 
  this.dequeue = dequeue; 
  this.removeLast = removeLast;
}

function enqueue(element) { 
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function removeLast() {
  return this.dataStore.pop();
}
 
var dq = new Dequeue();
dq.enqueue('hi');
dq.enqueue('how');
dq.enqueue('are');
dq.enqueue('you');
dq.dequeue();
dq.removeLast();

console.log(dq);

// #2

function Dequeue() { 
  this.dataStore = []; 
  this.enqueue = enqueue; 
  this.dequeue = dequeue; 
  this.removeLast = removeLast;
}

function enqueue(element) { 
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function removeLast() {
  return this.dataStore.pop();
}

function isPlindrome(word) {
  var dq = new Dequeue();
  for (var i = 0; i < word.length; ++i) {
    dq.enqueue(word[i]);
  }
  
  var compWord = "";
  while (dq.dataStore.length > 0) {
      compWord += dq.removeLast();
   }
  
  if (compWord == word) {
    console.log('palindrome');
  } else {
    console.log('not a palindrome');
  }
}
 
isPlindrome('racecar');
isPlindrome('hi');

console.log(dq);


// #3
function Dequeue() { 
  this.dataStore = []; 
  this.enqueue = enqueue; 
  this.dequeue = dequeue; 
  this.removeLast = removeLast;
}

function enqueue(element) { 
  this.dataStore.push(element);
}

function dequeue() {
  var priority = this.dataStore[0].code;
   for (var i = 1; i < this.dataStore.length; ++i) {
     if (this.dataStore[i].code > priority) { 
       priority = i;
     } 
   }
  return this.dataStore.splice(priority,1);
}

function removeLast() {
  return this.dataStore.pop();
}


function Patient(name, code) { 
  this.name = name;
  this.code = code;
}
 
var p = new Patient("Smith",1); 
var dq = new Dequeue(); 
dq.enqueue(p);
p = new Patient("Jones", 6); 
dq.enqueue(p);
p = new Patient("Joe", 4); 
dq.enqueue(p);

var seen = dq.dequeue();
console.log(seen[0].name);

// #4

function Dequeue() { 
  this.dataStore = []; 
  this.enqueue = enqueue; 
  this.dequeue = dequeue; 
  this.removeLast = removeLast;
  this.patientIsSeeing = patientIsSeeing;
  this.displayJustEntered = displayJustEntered;
  this.displayWaitingList = displayWaitingList;
}

function enqueue(element) { 
  this.dataStore.push(element);
}

function dequeue() {
  var priority = this.dataStore[0].code;
   for (var i = 0; i < this.dataStore.length; ++i) {
     if (this.dataStore[i].code < priority) { 
       priority = i;
     } 
   }
  return this.dataStore.splice(priority,1);
}

function displayJustEntered() {
  return this.dataStore[this.dataStore.length - 1].name;
}

function patientIsSeeing() {
  return this.dequeue()[0].name;
}

function displayWaitingList() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    console.log("waiting list: " + this.dataStore[i].name);
  }
}



function Patient(name, code) { 
  this.name = name;
  this.code = code;
}


var dq = new Dequeue(); 
var p = new Patient("Smith", 7);  
dq.enqueue(p);
p = new Patient("Jones", 9); 
dq.enqueue(p);
p = new Patient("Joe", 4); 
dq.enqueue(p);
p = new Patient("John", 2); 
dq.enqueue(p);
p = new Patient("Jessica", 3); 
dq.enqueue(p);
p = new Patient("Jack", 6); 
dq.enqueue(p);


var seen = dq.patientIsSeeing();
var enters = dq.displayJustEntered();
console.log("to be seen " + seen);
console.log("just entered " + enters);
var list = dq.displayWaitingList();
