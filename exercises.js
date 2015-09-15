/// #1
/// brute-force technique(recursion) to find the longest common substring

function findSubstring(word1, word2) {
    var str = "";
    return getString(str, word1, word2);
}

function getString(str, word1, word2) {
  if ((word1.length == 1) || (word2.length == 1))  {
    if (word1[0] == word2[0]) {
      str += word1[0];
      return str;
    } else {
      return str;
    }
  }
  if (word1[0] == word2[0]) {
      str += word1[0];
      word1 = word1.slice(1);
      word2 = word2.slice(1);
      return getString(str, word1, word2);
  } else {
    if (str.length != 0) {
      return str;
    } else {
      word1 = word1.slice(1);
      word2 = word2.slice(1);
      return getString(str, word1, word2);
    }
  }
}
findSubstring('adidus', 'bdidis');

/// #2 
/// changes the constraints of a knapsack problem
function max(a, b) {
  return (a > b) ? a : b;
}

function dKnapsack(capacity, size, value, n) {
  var K = [];
  for (var i = 0; i <= capacity+1; i++) {
    K[i] = [];
  }
  for (var i = 0; i <= n; i++) {
    for (var w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) {
        K[i][w] = 0;
      } else if (size[i-1] <= w) {
        K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]],
        K[i-1][w]);
      } else {
        K[i][w] = K[i-1][w];
      }
      console.log(K[i][w] + " ");
    }
    console.log();
  }
  return K[n][capacity];
}

function swap(arr, index, index1) { 
  temp = arr[index];
  arr[index] = arr[index1]; 
  arr[index1] = temp;
}

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data && i > (arr.length * 0.2)) { 
      swap(arr,i,0);
      return true;
    } else if (arr[i] == data) {
      return true; 
    }
  }
  return false; 
}


function changeSizeOrValue(n, m, size) {
  if (seqSearch(size, n)) {
    var i = size.indexOf(n);
    size[i] = m;
    return size;
  } else {
    console.log('size does not contain this element');
  }
}

function changeCapacity(newCapacity) {
  capacity = newCapacity;
  return capacity;
}

var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(dKnapsack(capacity, size, value, n));
changeSizeOrValue(5, 10, value);
changeCapacity(7);
console.log(dKnapsack(capacity, size, value, n));

/// #3

function makeChange(origAmt, coins) { 
var remainAmt = 0;
if (origAmt % .25 < origAmt) {
   coins[3] = parseInt(origAmt / .25);
   remainAmt = origAmt % .25;
   origAmt = remainAmt;
}

origAmt = Math.round(origAmt * 100) / 100;

if (origAmt % .05 < origAmt) {
   coins[1] = parseInt(origAmt / .05);;
   remainAmt = origAmt % .05;
   origAmt = remainAmt;
}
   origAmt = Math.round(origAmt * 100) / 100;
   coins[0] = parseInt(origAmt / .01);;
}

function showChange(coins) {
  if (coins[3] > 0) {
    console.log("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
  }

  if (coins[1] > 0) {
    console.log("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
  }

  if (coins[0] > 0) {
    console.log("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
  }
}

var origAmt = .30;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);
