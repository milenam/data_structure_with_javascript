// Bubble sort
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;

  }
  this.bubbleSort = bubbleSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }

  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    //console.log(outer);
    for (var inner = 0; inner < outer-1; ++inner) {

      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
    console.log(this.toString());
  }
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
//console.log(myNums);
myNums.bubbleSort();
//console.log();
console.log(myNums.toString());

// selection sort
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;

  }
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }

  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    //console.log(outer);
    for (var inner = 0; inner < outer-1; ++inner) {

      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
    console.log(this.toString());
  }
}

function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
    //console.log('ds', this.dataStore.length-2);
    min = outer;
    for (var inner = outer + 1;
     inner <= this.dataStore.length-1; ++inner) {
     if (this.dataStore[inner] < this.dataStore[min]) {
       min = inner;
     }
    }
    swap(this.dataStore, outer, min);
    console.log(this.toString());
  }
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
//console.log(myNums);
myNums.selectionSort();
//console.log();
console.log(myNums.toString());

// insertion sort
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;

  }
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }

  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    //console.log(outer);
    for (var inner = 0; inner < outer-1; ++inner) {

      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
    //console.log(this.toString());
  }
}

function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
    //console.log('ds', this.dataStore.length-2);
    min = outer;
    for (var inner = outer + 1;
     inner <= this.dataStore.length-1; ++inner) {
     if (this.dataStore[inner] < this.dataStore[min]) {
       min = inner;
     }
    }
    swap(this.dataStore, outer, min);
    //console.log(this.toString());
  }
}

function insertionSort() {
  var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      //console.log(inner);
      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
        this.dataStore[inner] = this.dataStore[inner-1];
        --inner;
      }
      this.dataStore[inner] = temp;
      //console.log(this.toString());
  }
}


var numElements = 10000;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime(); nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the bubble sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the selection sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the insertion sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");

// shellsort

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;

  }
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.gaps = [5,3,1];
  this.shellsort = shellsort;
  this.shellsort1 = shellsort1;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }

  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function shellsort() {
  for (var g = 0; g < this.gaps.length; ++g) {
    for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
      var temp = this.dataStore[i];
        for (var j = i; j >= this.gaps[g] &&
        this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
          //this.toString()
      }
        this.dataStore[j] = temp;

    }
  }
}

function shellsort1() {
  var N = this.dataStore.length;
  var h = 1;
  while (h < N/3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
       swap(this.dataStore, j, j-h);
      }
    }
    h = (h-1)/3;
  }
}

var numElements = 10;
var nums = new CArray(numElements);
nums.setData();
console.log("Before Shellsort: \n");
console.log(nums.toString());
nums.shellsort1();
console.log("\nAfter Shellsort: \n");
console.log(nums.toString());