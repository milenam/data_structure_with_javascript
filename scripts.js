// ARRAYS

// Adding, removing elements to the array

var nums = [1,2,3,4,5]
nums.push(6); // OR
nums[nums.length] = 6;
print(nums); // 1,2,3,4,5,6

// removing

var nums = [2,3,4,5]
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
	nums[i] = nums[i-1];
}
nums[0] = newnum;


//======== FIlTER

function passing(num) {
	return num >= 60;
}

var grades = [];
for(var i=0; i < 20; ++i) {
  grades[i] = Math.floor(Math.random() * 101); //(between 0 and 1 multiplied by 101)
}
var passGrades = grades.filter(passing);

print("All grades: ");
print(grades);
print("Passing grades: ");
print(passGrades);

// ======== filter with strings

function afterc(str) {
  if (str.indexOf("cie") > -1) { // gives index == [] (positioning) of...
    return true;
  }
  return false;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
print(misspelled);

// ======== two dimensional arrays

Array.matrix = function(numrows, numcols, initial) { // Array.matrix sets numbeer of rows and columns and initial is the value of all elems in the array
	var arr = [];
	for(var i=0; i < numrows; ++i) {
    var columns = [];
	  for(var j=0; j < numcols; ++j){
	    columns[j] = initial;
	  }
    arr[i] = columns;
  }
  return arr;
}

var nums = Array.matrix(5,5,0);
print(nums[1][1]); // prints 0
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
print(names[1][2]); // displays "Joe"

//example rows

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]; // [89, 77, 78]
                                                       // [76, 82, 81]
                                                       // [91, 94, 89]
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
	for (var col = 0; col < grades[row].length; ++col) { total += grades[row][col];

	}
  average = total / grades[row].length;
  print("Student " + parseInt(row+1) + " average: " + average.toFixed(2)); //parseInt - parses a string argument and returns an integer of the specified radix, in this case radix is the index of an array[i+1]
  total = 0;
  average = 0.0;
}


// columns

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
	for (var row = 0; row < grades[col].length; ++row) { total += grades[row][col];
	}
	average = total / grades[col].length;
	print("Test " + parseInt(col+1) + " average: " + average.toFixed(2));
	total = 0;
	average = 0.0;
}

// jagged arrays

var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) { total += grades[row][col];
  }
  average = total / grades[row].length;
  print("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}

// Array of Objects

function Point(x,y) {
	this.x = x;
  this.y = y;
}

function displayPts(arr) {
  for (var i = 0; i < arr.length; ++i) {
	  print(arr[i].x + ", " + arr[i].y);
  }
}
var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
  print("Point " + parseInt(i+1) + ": " + points[i].x + ", " + points[i].y);
}

// ----

function weekTemps() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(temp) {
	this.dataStore.push(temp);
}

function average() {
var total = 0;
for (var i = 0; i < this.dataStore.length; ++i) {
  total += this.dataStore[i];
}
  return total / this.dataStore.length;
}

// exercises
// 1
function Grades() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(grade) {
	this.dataStore.push(grade);
}

function average() {
	var total = 0;
	for(var i = 0; i < this.dataStorage.length; ++i) {
		total += this.dataStorage[i];
	}

	return total / this.DataStore.length;
}

// 2

var arr = ['start', 'sdfd', 'erfter', 'ertre', 'end'];

print(arr);

var n = arr.length;
for (var i = n; i >= 0; --i) {
	arr[i] = arr[i-1];
	print(arr[i-1]);
}

// 3
// TODO: write this in the prototypal pattern

window.dataStore = new Array.matrix(4, 7, null);
function weekTemps() {

  this.add = add;
  this.average = average;

}

function add(temp, week, dayoftheweek) {
  window.dataStore[week][dayoftheweek] = temp;
}

weekTemps.prototype.average = function() {
  var weektotal = 0;
	  for (var i = 0; i < window.dataStore.length; ++i) {
	  weektotal += window.dataStore[i];
  }
  return weektotal / window.dataStore.length;
}
var stat = new weekTemps();
stat.add(53, 0, 2);
stat.add(43, 1, 0);
stat.add(73, 2, 1);

// stat.add(temp, week, dayoftheweek);
// [[],
//  [],
//  [],
//  []]

console.log(this.dataStore);

// 4

function Words() {
  this.dataStore = [];
  this.add = add;
  this.displayWord = displayWord;
}

function add(letter) {
  this.dataStore.push(letter);
}

function displayWord() {

  var words = this.dataStore.join("");
  console.log(words);
}

var randWord = new Words();
randWord.add('i');
randWord.add('p');
randWord.add('h');
randWord.add('o');
randWord.add('n');
randWord.add('e');

randWord.displayWord();





function weekTemps() {
  this.dataStore = function() {
    Array.prototype.matrix(4, 7, null) // trying to copy an Array object into weekTemps
  };

}



weekTemps.prototype.add = function(temp, week, dayoftheweek) {
  this.dataStore[week][dayoftheweek] = temp;
}

weekTemps.prototype.average = function() {
  var weektotal = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    weektotal += this.dataStore[i];
  }
  return weektotal / this.dataStore.length;
}
var stat = new weekTemps();
stat.add(53, 0, 2);
stat.add(43, 1, 0);
stat.add(73, 2, 1);

// stat.add(temp, week, dayoftheweek);
// [[],
//  [],
//  [],
//  []]

console.log(this.dataStore);


// Don't polute the global namespace!
// TODO: show me the version of code you have in mind
// TODO: create two "classes" that share some prototyped behavior

var Foo = function() {
    this.instMeth = 3;
    this.add = function(val) {
        return (this.instMeth + val);
    }
}


var Bar = function() {
    this.diffMeth = 5;
    this.add = function(val) {
        return (this.diffMeth + val + 4);
    }
}

var f = new Foo()
f.instMeth;

var b = new Bar();
b.diffMeth;

// STACKS

// #1
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}
// TODO:
// 1. if a closing prn is missing show the position of the openning prn
// 2. If there two many closing prns, throw an error
// 3. Show Bryce the state of a stack for each iteration of a loop
// 4. Refactor the counter's out(dataStore.length)

function balancedBrackets(string) {
  var s = new Stack();
  var counterO = 0;
  var counterC = 0;

  for (var i = 0; i < string.length; ++i) {
    if (string[i] == "(") {
      counterO++;
      s.push(i);
    }

    if (string[i] == ")") {
      counterC++;
      s.pop(i);
    }
  }

   if (counterC > counterO) {
     console.log("you're missing open prn")
   } else if (counterC < counterO) {

   } else {
     console.log('nothing is missing');
   }

}
balancedBrackets("(6+4*31+(120/3");
// #2

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

function converter(expression) {
  var operands = new Stack;
  var operators = new Stack;

 for (var i = 0; i < expression.length; ++i) {
   if (!(expression[i].match(/["*:<>?\\/|+\-\[\]]/))) {
     operands.push(expression[i]);
   } else {
     operators.push(expression[i]);
   }
  }


   console.log(operands);
   console.log(operators);
  for (var j = 0; j < operators.dataStore.length; ++j) {
    if ((operators.dataStore[j] == "*") || (operators.dataStore[j] == "/"))

    operands.push(operators.pop());
  }
  console.log(operands);
}

converter('1+2*3-2');


// 3

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

function PDispenser(candies) {
  var s = new Stack();
  var arrayOfCandies = candies.split(',');

  for (var i = 0; i < arrayOfCandies.length; ++i) {
      s.push(arrayOfCandies[i]);


  }

  var temp = new Stack();
  var yellow = "yellow";

  for (var j = 0; j < s.dataStore.length; ++j) {
    console.log(s.dataStore);
      if(s.dataStore[j] === yellow) {
        var removed = s.dataStore.splice(j, 1)
        temp.push(removed);
        console.log(s.dataStore);

    }
  }
}

PDispenser('yellow, red, white, yellow, red');


// Stuff

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}
// TODO:
// 1. if a closing prn is missing show the position of the openning prn
// 2. If there two many closing prns, throw an error
// 3. Show Bryce the state of a stack for each iteration of a loop
// 4. Refactor the counter's out(dataStore.length)

function balancedBrackets(exp) {
  var string = exp.split('');
  var s = new Stack();


  for (var i = 0; i < string.length; ++i) {
    if (string[i] == "(" || string[i] == ")") {

      s.push(string[i]);
      console.log(s);
    }

    if (string[i] == ")" || string[i] == "(") {
    
      s.pop();
   
    }
   
  }
  console.log(s);
  for (var i = 0; i < s.dataStore.length; ++i) {
    console.log(s.dataStore[i]);
    if (s.dataStore[i] == ")") {
       console.log("you're missing open prn");
    } else if (s.dataStore[i] == "(") {
       console.log("you're missing cls prn");
    } else {
       return true;
    } 
  }
}
balancedBrackets("(6+4)*(31+)+(3+1203)");

// palying with stacks

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.put = put;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function put(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore.shift();
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

function priority(operand) {
  if((operand == '*') || (operand == '/')) {
    return true;
  } else {
    return false;
  }
}

function converter(expression) {
  var operands = new Stack;
  var operators = new Stack;
  var newExpression = new Stack;
  console.log(expression);

 for (var i = 0; i < expression.length; ++i) {
   if ((expression[i].match(/["*:<>?\\/|+\-\[\]]/))) {
     operators.put(expression[i]);
   } //else {
     //if ((expression[i] == "*") || (expression[i] == "/") ) {
       //operators.put(expression[i]);
     //} else {
       //operators.dataStore.push(expression[i]);
     //}
   //}
  }
  console.log(operators);
  
   //console.log(operands);
   //console.log(operators);
  
  //newExpression.put(operands.pop());
  //newExpression.put(operands.pop());
  //console.log(operands);
  
  //for (var j = 0; j < operators.dataStore.length; ++j) {
    //for (var j = 0; j < operators.dataStore.length; ++j) {
      //if ((operators.dataStore[j] == "*") || (operators.dataStore[j] == "/")) {
        //newExpression.put(operators.dataStore[j]);
        //newExpression.put(operands.pop());

      //} else {
       // newExpression.put(operands.pop());
        //newExpression.put(operators.pop());
        //newExpression.push(operators.pop());
        //if ((operators.dataStore[j] == "*") || (operators.dataStore[j] == "/"))  {
          
        //} 
      //}
    //}
  //}
  // console.log(operators);
  //console.log(newExpression);
  //for (var j = 0; j < operators.dataStore.length; ++j) {
    //if ((operators.dataStore[j] == "*") || (operators.dataStore[j] == "/"))

    //operands.push(operators.pop());
  //}
  //console.log(operands);
}

converter('1*2+3*2');

