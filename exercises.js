// #1
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements.length; ++i) {
    this.dataStore[i] = numElements[i];
    //console.log(this.dataStore);

  }
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.gaps = [5,3,1];
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

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    //console.log(outer);
    for (var inner = 0; inner < outer-1; ++inner) {
      //console.log(this.dataStore[inner]);
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
      console.log(this.toString());
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

var numElements = ['hat', 'hi', 'zoo', 'apple', 'random', 'words', 'keyboard', 'computer', 'seconds', 'hat', 'hi', 'zoo', 'apple', 'random', 'words', 'keyboard', 'computer', 'seconds'];
var nums = new CArray(numElements);
//nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
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


/// #2 in soretd order

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
  this.shellsort1 = shellsort1;
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.qSort = qSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
  this.dataStore.sort();
  //console.log('data',this.dataStore);
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

function mergeSort(arr) {
  if (this.dataStore.length < 2) {
    return;
  }

  var step = 1;
  var left, right;
  while (step < this.dataStore.length) {
   left = 0;
   right = step;
   while (right + step <= this.dataStore.length) {
     mergeArrays(this.dataStore, left, left+step, right, right+step);
     left = right + step;
     right = left + step;
   }
    if (right < this.dataStore.length) {
      mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
    }
   step *= 2;
  }
}


function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length-1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }

  k = startLeft;
  for (var i = 0; i < (leftArr.length-1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }

  rightArr[rightArr.length-1] = Infinity; // a sentinel value
  leftArr[leftArr.length-1] = Infinity; // a sentinel value
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }

  //console.log("left array - ", leftArr);
  //console.log("right array - ", rightArr);
}

function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    //console.log("pivot: " + pivot + " current element: " + arr[i]);
    if (arr[i] < pivot) {
      //console.log("moving " + arr[i] + " to the left");
      left.push(arr[i]);
      } else {
        //console.log("moving " + arr[i] + " to the right");
        right.push(arr[i]);
      }
   }
   return qSort(left).concat(pivot, qSort(right));
}


var numElements = 1000;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
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
start = new Date().getTime();
nums.shellsort1();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the shell sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.mergeSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the merge sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.qSort(nums.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the quick sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");


// #3 reverse

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
  this.shellsort1 = shellsort1;
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.qSort = qSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
  this.dataStore.reverse();
  //console.log('data',this.dataStore);
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

function mergeSort(arr) {
  if (this.dataStore.length < 2) {
    return;
  }

  var step = 1;
  var left, right;
  while (step < this.dataStore.length) {
   left = 0;
   right = step;
   while (right + step <= this.dataStore.length) {
     mergeArrays(this.dataStore, left, left+step, right, right+step);
     left = right + step;
     right = left + step;
   }
    if (right < this.dataStore.length) {
      mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
    }
   step *= 2;
  }
}


function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length-1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }

  k = startLeft;
  for (var i = 0; i < (leftArr.length-1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }

  rightArr[rightArr.length-1] = Infinity; // a sentinel value
  leftArr[leftArr.length-1] = Infinity; // a sentinel value
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }

  //console.log("left array - ", leftArr);
  //console.log("right array - ", rightArr);
}

function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    //console.log("pivot: " + pivot + " current element: " + arr[i]);
    if (arr[i] < pivot) {
      //console.log("moving " + arr[i] + " to the left");
      left.push(arr[i]);
      } else {
        //console.log("moving " + arr[i] + " to the right");
        right.push(arr[i]);
      }
   }
   return qSort(left).concat(pivot, qSort(right));
}


var numElements = 1000;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
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
start = new Date().getTime();
nums.shellsort1();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the shell sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.mergeSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the merge sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.qSort(nums.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the quick sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");

// #4

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
  this.regSort = regSort;
  this.qSort = qSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
  this.dataStore.reverse();
  //console.log('data',this.dataStore);
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

function regSort(arr) {
  return arr.sort();
}

function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    //console.log("pivot: " + pivot + " current element: " + arr[i]);
    if (arr[i] < pivot) {
      //console.log("moving " + arr[i] + " to the left");
      left.push(arr[i]);
      } else {
        //console.log("moving " + arr[i] + " to the right");
        right.push(arr[i]);
      }
   }
   return qSort(left).concat(pivot, qSort(right));
}


var numElements = 10000;
var nums = new CArray(numElements);
nums.setData();
start = new Date().getTime();
nums.regSort(nums.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the sort build in Javascript function on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.qSort(nums.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the quick sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");


