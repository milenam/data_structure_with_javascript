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



// LISTS
// 1 - 2

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; 
  this.find = find;
  this.toString = toString;
  this.insert = insert; 
  this.append = append;
  this.bigger = bigger;
  this.smaller = smaller;
}

function append(element) { 
  this.dataStore.push(element);
  this.listSize++;

}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) { 
      return i;
    } 
  }
  return -1; 
}

function smaller(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] > element) { 
      return true;
    } 
  }
  return false; 
}

function bigger(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] < element) { 
      return true;
    } 
  }
  return false; 
}

function insert(element, after) { 
  var insertPos = this.find(after);
  if ((insertPos > -1) && (this.bigger(element))) {
  
    this.dataStore.splice(insertPos+1, 0, element); 
    ++this.listSize;
    console.log(this.listSize);
    return true;
}
return false; }

var list = new List();
list.append(5);
list.append(12);
list.append(11);
list.append(2);
list.append(99);


list.insert("Meli", 5);

// 3

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; 
  this.find = find;
  this.toString = toString; 
  this.append = append; 
  this.front = front; 
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length; 
  this.currPos = currPos; 
  this.moveTo = moveTo; 
  this.getElement = getElement; 
  this.length = length; 
}

function append(element) { 
  this.dataStore[this.listSize++] = element;
}

function length() { 
  return this.listSize;
}

function front() { 
  return this.pos = 0;
}

function end() {
 this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > 0) {
  --this.pos; }
}

function next() {

  return ++this.pos; 
 
}

function currPos() { 
  return this.pos;
}

function moveTo(position) { 
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if ((list.getElement() instanceof Person) && (list.getElement()["gender"] == "male")){ 
      console.log(list.getElement()["name"] + ", " +
      list.getElement()["gender"]);;
    }
  }
}



var Person = function(name, gender) {
  this.name = name;
  this.gender = gender;
}


var person = new Person("emli", "female");
var person2 = new Person("fdsmli", "male");
var person3 = new Person("henry", "male");
var person4 = new Person("koss", "male");
var person5 = new Person("amelia", "female");
var person6 = new Person("chai", "male");
var person7 = new Person("phone", "male");
var person8 = new Person("desk", "female");
var person9 = new Person("top", "male");
var person10 = new Person("tada", "female");




var people = new List();
people.append(person);
people.append(person2);
people.append(person3);
people.append(person4);
people.append(person5);
people.append(person6);
people.append(person7);
people.append(person8);
people.append(person9);
people.append(person10);


displayList(people);

// 4


function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; 
  this.find = find;
  this.toString = toString; 
  this.append = append; 
  this.front = front; 
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length; 
  this.currPos = currPos;
  this.remove = remove;
  this.moveTo = moveTo; 
  this.getElement = getElement; 
  this.length = length;
  this.contains = contains;
}

function append(element) { 
  this.dataStore[this.listSize++] = element;
}

function length() { 
  return this.listSize;
}

function front() { 
  return this.pos = 0;
}

function end() {
 this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > 0) {
  --this.pos; }
}

function next() {

  return ++this.pos; 
 
}

function currPos() { 
  return this.pos;
}

function contains(element) {
 for (var i = 0; i < this.dataStore.length; ++i) {
 if (this.dataStore[i] == element) { 
   return true;
   } 
 }
return false; }

function moveTo(position) { 
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

function find(element) {
for (var i = 0; i < this.dataStore.length; ++i) {
if (this.dataStore[i] == element) { return i;
} }
return -1; }


function remove(element) {
  var foundAt = this.find(element); if (foundAt > -1) {
    this.dataStore.splice(foundAt,1); --this.listSize;
    return true;
  }
  return false; 
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {

      console.log(list.getElement()["movie"]);
    
  }
}



var Customer = function(name, movie) {
  this.name = name;
  this.movie = movie;
}


function checkOut(name, movie, filmList, rentList, customerList) { 
  if (filmList.contains(movie)) {
  var c = new Customer(name, movie); 
    customerList.append(c); 
    filmList.remove(movie);
    rentList.append(movie);
}
else {
          console.log(movie + " is not available.");
       }
}

var movies = ["movie1", "movie2"];
var filmList = new List();
for (var i = 0; i < movies.length; ++i) {
       filmList.append(movies[i]);
    }
var customers = new List();
var rentList = new List();

checkOut("ghhgj", "movie1", filmList, rentList, customers);

displayList(rentList);


















