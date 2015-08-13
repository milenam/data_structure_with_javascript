// SETS
// #1

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if(pos>-1){
    this.dataStore.splice(pos,1);
    return true;
  } else {

    return false;
  }
}

function show() {
  return this.dataStore.sort();
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
   return true;
  } else {
    return false;
  }
}

function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
       tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function subset(set) {
  if (this.size() > set.size()) {
    return false; }
  else {
    for each (var member in this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }
  }
  return true;
}

function size() {
  return this.dataStore.length;
}

function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}



var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

names.show();

// #2

function Set() {
  this.dataStore = new LList();
  this.add = add;
  this.remove = remove;
  this.size = 0;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

function add(data) {
    var element = this.dataStore.head.element;
  //if (this.head != null) {
    this.dataStore.insert(data, element);
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if(pos>-1){
    this.dataStore.splice(pos,1);
    return true;
  } else {

    return false;
  }
}

function show() {
  return this.dataStore;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
   return true;
  } else {
    return false;
  }
}

function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
       tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function subset(set) {
  if (this.size() > set.size()) {
    return false; }
  else {
    for each (var member in this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }
  }
  return true;
}


function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function Node(element) {
  this.element = element;
  this.next = null;
}


function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
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


var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

names.show();

////////////////

function add(data) {
    var element = this.dataStore.head.element;
  //if (this.head != null) {
    this.dataStore.insert(data, element);
    this.size++;
    //return true;
  } else {

    while (this.size < 4) {
      var cur = this.dataStore.head.next
      var last = cur;
      //if (cur == null) {
        //var ele = cur.element;
        this.dataStore.insert(data, last.element);
        console.log(last);
        //return cur;

        this.size++;
      //}
    }

      //var element = this.dataStore.head.next.element;
      //this.dataStore.insert(data, element);
      //this.size++;
  }
  console.log(this.dataStore.head);
}
