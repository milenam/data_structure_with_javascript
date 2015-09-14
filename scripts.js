function lcs(word1, word2) {
  var max = 0;
  var index = 0;
  var lcsarr = new Array(word1.length+1);
  for (var i = 0; i <= word1.length+1; ++i) {
    lcsarr[i] = new Array(word2.length+1);
    for (var j = 0; j <= word2.length+1; ++j) {
      lcsarr[i][j] = 0;
    }
  }

  for (var i = 0; i <= word1.length; ++i) {
     for (var j = 0; j <= word2.length; ++j) {
       if (i == 0 || j == 0) {
         lcsarr[i][j] = 0;
       } else { // i = 1, j = 1;
         if (word1[i-1] == word2[j-1]) {
           lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
         } else {
           lcsarr[i][j] = 0;
         }
       }

       if (max < lcsarr[i][j]) {
         max = lcsarr[i][j];
         index = i;
       }
     }
   }
  console.log(lcsarr);

  var str = "";
  if (max == 0) {
    return "";
  } else {
    for (var i = index-max; i <= max; ++i) {
       str += word2[i];
    }
    return str;
  }
}

lcs('abbcc', 'dbbcc');

//////// The Knapsack Problem: A Recursive Solution

function max(a, b) {
  return (a > b) ? a : b;
}
function knapsack(capacity, size, value, n) {
  if (n == 0 || capacity == 0) {
    return 0;
  }
  if (size[n-1] > capacity) {
    return knapsack(capacity, size, value, n-1);
  } else {
    return max(value[n-1] +
    knapsack(capacity-size[n-1], size, value, n-1), knapsack(capacity, size, value, n-1));
  }
}
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
print(knapsack(capacity, size, value, n));

//////// The Knapsack Problem: A Dynamic Programming Solution
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

var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(dKnapsack(capacity, size, value, n));

///////////
/// A First Greedy Algorithm Example: The Coin-Changing Problem
function makeChange(origAmt, coins) { var remainAmt = 0;
if (origAmt % .25 < origAmt) {
   coins[3] = parseInt(origAmt / .25);
   remainAmt = origAmt % .25;
   origAmt = remainAmt;
}
if (origAmt % .1 < origAmt) {
   coins[2] = parseInt(origAmt / .1);
   remainAmt = origAmt % .1;
   origAmt = remainAmt;
}
if (origAmt % .05 < origAmt) {
   coins[1] = parseInt(origAmt / .05);
   remainAmt = origAmt % .05;
   origAmt = remainAmt;
}
   coins[0] = parseInt(origAmt / .01);
}

function showChange(coins) {
  if (coins[3] > 0) {
    console.log("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
  }

  if (coins[2] > 0) {
    console.log("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
  }

  if (coins[1] > 0) {
    console.log("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
  }

  if (coins[0] > 0) {
    console.log("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
  }
}

var origAmt = .63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);

/////// A Greedy Algorithm Solution to the Knapsack Problem

function ksack(values, weights, capacity) {
  var load = 0;
  var i = 0;
  var w = 0;
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity-load)) {
      w += values[i];
      load += weights[i];
    } else {
    var r = (capacity-load)/weights[i];
      w += r * values[i];
      load += weights[i];
    }
    ++i;
  }

  return w;
}
var items = ["A", "B", "C", "D"];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
console.log(ksack(values, weights, capacity));
