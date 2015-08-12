// HASHES #1

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.values = [];
}

function put(key, data) {
  var pos = this.betterHash(key);
  if (this.table[pos] == undefined) {
    this.table[pos] = key;
    this.values[pos] = data;
    pos++;
  } else {
    while (this.table[pos] != undefined) {
      pos++;
    }

    this.table[pos] = key;
    this.values[pos] = data;
  }
  console.log(this);
}

function get(key) {

  var hash = -1;
  hash = this.table.indexOf(key);
  if(hash > -1) {

    for (var i = hash; this.table[hash] != undefined; i++) {

      if (this.table[hash] == key) {
        console.log(this.values[hash]);
        return this.values[hash];
      }
    }
  }

  return undefined;
}

function showDistro() {
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
    console.log(this.table[i] + ": " + this.values[i]);
    }
  }
}

function betterHash(string) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }

  total = total % this.table.length;

  if(total < 0) {
    total += this.table.length-1;
  }

  return parseInt(total);
}

var someNames = ["apple", "cup", "computer", "coffee",
"telephone"];

var someDefinitions = ["the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.", "a small, bowl-shaped container for drinking from, typically having a handle.", "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.", "a drink made from the roasted and ground beanlike seeds of a tropical shrub, served hot or iced.",
"a system that converts acoustic vibrations to electrical signals in order to transmit sound, typically voices, over a distance using wire or radio."];

var hTable = new HashTable();
var count = 0;
while (count < someNames.length) {
  hTable.put(someNames[count], someDefinitions[count]);

  count++;
}
hTable.get("cup");

hTable.showDistro();



///////////////

// HASHES #2

function HashTable() {
  this.table = new Array(13);
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;

}

function buildChains() {
  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

function put(key, data) {
  var pos = this.betterHash(key);
  console.log(this);
  var index = 0;

  if (this.table[pos][index] == undefined) {

    this.table[pos][index] = new Object();
    this.table[pos][index][key] = data;

    ++index;

  } else {
    while (this.table[pos][index] != undefined) {
      ++index;

    }

  this.table[pos][index] = new Object();
    this.table[pos][index][key] = data;
  }

}

function get(key) {
var index = 0;
var pos = this.betterHash(key);
  //console.log(pos + ": " + this.table.indexOf(this.table[pos]));
  if (this.table.indexOf(this.table[pos]) == pos) {
    for (var j = 0; j < this.table[pos].length; j++) {
        for (var prop in this.table[pos][j]) {
          if (prop == key) {
            console.log(this.table[pos][j][prop]);
          }
        }
      }
    index ++;
  }
  else {
   while (this.table[pos][index] != key) {
     index ++;
   }
  for (var j = 0; j < this.table[pos].length; j++) {
        for (var prop in this.table[pos][j]) {
          console.log(this.table[pos][j][prop]);
        }
      }
 }

 return undefined;

}


function showDistro() {
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] != undefined) {
      for (var j = 0; j < this.table[i].length; j++) {
        for (var prop in this.table[i][j]) {
          console.log(prop + ":  " + this.table[i][j][prop]);
        }
      }
    }
  }
}


function betterHash(string) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }

  total = total % this.table.length;

  if(total < 0) {
    total += this.table.length-1;
  }
  return parseInt(total);
}

var someNames = ["Raymond", "bsserewe", "cup1", "computer", "coffee",
"telephone"];

var someDefinitions = ["the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.", "cider.", "a small, bowl-shaped container for drinking from, typically having a handle.", "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.", "a drink made from the roasted and ground beanlike seeds of a tropical shrub, served hot or iced.",
"a system that converts acoustic vibrations to electrical signals in order to transmit sound, typically voices, over a distance using wire or radio."];

var hTable = new HashTable();
hTable.buildChains();
var count = 0;
while (count < someNames.length) {
  hTable.put(someNames[count], someDefinitions[count]);

  count++;
}
hTable.get("Raymond");

hTable.showDistro();

// 3
// HASHES #1

function HashTable() {
  this.table = new Array(137);
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;
  this.numberOfTimes = numberOfTimes;

}

function buildChains() {
  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

function put(key, data) {
  var pos = this.betterHash(key);
  if (this.table[pos] == undefined) {
    pos = key;
    this.table[pos] = data;
    pos++;
  } else {
    while (this.table[pos] != undefined) {
      pos++;
    }

    pos = key;
    this.table[pos] = data;
  }
  //console.log(this);
}

function get(key) {
  if(this.table[key] < 2) {
  console.log("'" + key + "'" + " " + "displays" + " " + this.table[key] + " " + "time");
  } else {
    console.log("'" + key + "'" + " " + "displays" + " " + this.table[key] + " " + "times");
  }

}

function showDistro() {
    console.log(this);
}




function betterHash(string) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }

  total = total % this.table.length;

  if(total < 0) {
    total += this.table.length-1;
  }
  return parseInt(total);
}

function numberOfTimes(string) {
  var givenStr = string.split(' ');
  var textStr = givenStr.sort();
  var current = "";
  var counter = 0;
  for (var i = 0; i < textStr.length; i++) {


    if (textStr[i] != current) {
      current = textStr[i];
      counter = 1;
    } else {

      counter++;

    }

    this.put(textStr[i], counter);
  }
}

var text = "the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider";

var hTable = new HashTable();
hTable.numberOfTimes(text);

hTable.get("which");

hTable.showDistro();