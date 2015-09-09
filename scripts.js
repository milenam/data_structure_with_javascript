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


function binSearch(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    console.log("Current midpoint: " + mid);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];
console.log(numbers);
binSearch(numbers, 8);
console.log(numbers);

