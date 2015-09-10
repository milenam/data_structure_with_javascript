// self-organizing data
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data && i > (arr.length * 0.2)) { // if searched element is too close to front
      swap(arr,i,0);
      return true;
    } else if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];
console.log(numbers);
seqSearch(numbers, 8);
console.log(numbers);

// Binary search

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
  console.log(arr);
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    console.log("Current midpoint: " + arr[mid]);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else if (arr[mid] == data) {
      console.log("found: " + arr[mid] + "at position: " + arr.indexOf(arr[mid]));
      console.log(arr[mid]);
      return arr[mid];
    } else {
    }
  }
  return -1;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];
console.log(numbers);
binSearch(numbers, 4);
console.log(numbers);

// counting occurances

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
  console.log(arr);
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    console.log("Current midpoint: " + arr[mid]);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else if (arr[mid] == data) {
      console.log("found: " + arr[mid] + "at position: " + arr.indexOf(arr[mid]));
      console.log(arr[mid]);
      return arr[mid];
    } else {
    }
  }
  return -1;
}

function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
    for (var i = position-1; i > 0; --i) {
      if (arr[i] == data) {
      ++count;
      } else {
        break;
      }
    }

    for (var i = position+1; i < arr.length; ++i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }

  return count;
}



var numbers = [5,1,7,4,2,2,2,10,9,3,6,8];
console.log(numbers);
console.log(numbers);
var retVal = count(numbers, 2);
console.log("Found " + retVal + " occurrences of " + 2 + ".");

// text

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
    console.log("Current midpoint: " + arr[mid]);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else if (arr[mid] == data) {
      console.log("found: " + arr[mid] + " at position: " + arr.indexOf(arr[mid]));
      console.log(arr[mid]);
      return mid;
    } else {
    }
  }
  return -1;
}

function count(text, data) {
  //console.log(arr);
  var arr = text.split(" ");
  console.log(arr);
  var count = 0;
  var start = new Date().getTime();
  var position = binSearch(arr, data);
  var stop = new Date().getTime();
  var elapsed = stop - start;
  if (position >= 0) {
    console.log("Found " + data + " at position " + position + ".");
    console.log("Binary search took " + elapsed + " milliseconds.");
  } else {
    console.log(word + " is not in the file.");
  }
  if (position > -1) {
    ++count;
    for (var i = position-1; i > 0; --i) {
      if (arr[i] == data) {
      ++count;
      } else {
        break;
      }
    }

    for (var i = position+1; i < arr.length; ++i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }

  return count;
}



var text = "The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyondthe mountains, peopled by men and women from all sections and free from those state traditions which ran back to the early days of colonization. The voice of the democratic nationalism nourished in the West was heard when Clay of Kentucky advocated his American system of protection for industries; when Jackson of Tennessee condemned nullification in a ringing proclamation that has taken its place among the great American state papers; and when Lincoln of Illinois, in a fateful hour, called upon a bewildered people to meet the supreme test whether this was a nation destined to survive or to perish. And it will be remembered that Lincolns party chose for its banner that earlier device--Republican--which Jefferson had made a sign of power. The 'rail splitter' from Illinois united the nationalism of Hamilton with the democracy of Jefferson, and his appeal was clothed in the simple language of the people, not in the sonorous rhetoric which Webster learned in the schools.";
var retVal = count(text, "the");
console.log("Found " + retVal + " occurrences of " + "the" + ".");