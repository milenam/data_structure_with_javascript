// #1

//// last occurrence of an element is returned
function seqSearch(arr, data) {
  var count = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data && i > (arr.length * 0.2)) { // if searched element is too close to front
      swap(arr,i,0);
    } else if (arr[i] == data) {
      ++count;
      console.log('2',count);
      console.log(arr.indexOf(i));
    }
  }
  return false;
}

function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

var numbers = [5,1,8,7,4,2,10,9,3,6,8];
console.log(numbers);
seqSearch(numbers, 8);
console.log(numbers);

// #2
// comparison
// seqSearch is faster
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data && i > (arr.length * 0.2)) { // if searched element is too close to front
      swap(arr,i,0);
      return true;
    } else if (arr[i] == data) {
      return true;
    }
  }
  return -1;
}

function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

function insertionSort(arr) {
  var temp, inner;
  for (var outer = 1; outer <= arr.length-1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && (arr[inner-1] >= temp)) {
      arr[inner] = arr[inner-1];
      --inner;
    }

    arr[inner] = temp;
  }
}

function binSearch(arr, data) {
  insertionSort(arr);
  //console.log(arr);
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else if (arr[mid] == data) {
      return mid;
    } else {
    }
  }
  return -1;
}

var numbers = [];
for (var i = 0; i < 10000; ++i) {
   numbers[i] = Math.floor(Math.random() * 101);
}
var start = new Date().getTime();
var position = seqSearch(numbers, 8);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  console.log("seqSearch search took " + elapsed + " milliseconds.");
} else {
  console.log("is not in the file.");
}

var start2 = new Date().getTime();
var position3 = binSearch(numbers, 8);
var stop2 = new Date().getTime();
var elapsed2 = stop2 - start2;
if (position3 >= 0) {
  console.log("binSort search took " + elapsed2 + " milliseconds.");
} else {
  console.log("is not in the file.");
}


//// #3
// numbers
function insertionSort(arr) {
  var temp, inner;
  for (var outer = 1; outer <= arr.length-1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && (arr[inner-1] >= temp)) {
      arr[inner] = arr[inner-1];
      --inner;
    }

    arr[inner] = temp;
  }
}

function smallest(arr, smNumber) {
  insertionSort(arr);
  console.log(arr);
  var counter = 1;
  var smallest = arr[0];
  var temp;
  for(var i = 0; i < arr.length; i++) {
    if(counter != smNumber) {
      if (arr[i] == arr[i+1]) {
        temp = arr[i];
        counter;
      } else {
        counter++;
        temp = arr[i+1];
      }
    }
  }
  return temp;
}

var numbers = [];
for (var i = 0; i < 1000; ++i) {
   numbers[i] = Math.floor(Math.random() * 101);
}

smallest(numbers, 4);


//// text

function insertionSort(arr) {
  var temp, inner;
  for (var outer = 1; outer <= arr.length-1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && (arr[inner-1] >= temp)) {
      arr[inner] = arr[inner-1];
      --inner;
    }

    arr[inner] = temp;
  }
}

function smallest(text, smNumber) {
  var arr = text.split(" ");
  insertionSort(arr);
  console.log(arr);
  var counter = 1;
  var smallest = arr[0];
  var temp;
  for(var i = 0; i < arr.length; i++) {
    if(counter != smNumber) {
      if (arr[i] == arr[i+1]) {
        temp = arr[i];
        counter;
      } else {
        counter++;
        temp = arr[i+1];
      }
    }
  }
  return temp;
}

var text = "The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyondthe mountains, peopled by men and women from all sections and free from those state traditions which ran back to the early days of colonization. The voice of the democratic nationalism nourished in the West was heard when Clay of Kentucky advocated his American system of protection for industries; when Jackson of Tennessee condemned nullification in a ringing proclamation that has taken its place among the great American state papers; and when Lincoln of Illinois, in a fateful hour, called upon a bewildered people to meet the supreme test whether this was a nation destined to survive or to perish. And it will be remembered that Lincolns party chose for its banner that earlier device--Republican--which Jefferson had made a sign of power. The 'rail splitter' from Illinois united the nationalism of Hamilton with the democracy of Jefferson, and his appeal was clothed in the simple language of the people, not in the sonorous rhetoric which Webster learned in the schools.";
smallest(text, 3);