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
  //var pos = this.betterHash(key);
  var pos = 0;
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
  //console.log(this.values);

}

function get(key) {
  //var hash = -1;
  hash = key;
  if(hash > -1) {
    for (var i = hash; this.table[hash] != undefined; i++) {
      if (this.table[hash] == key) {
        console.log(this.values[this.table[hash]]);
        //return this.values[hash];
      }
    }
  }

  return undefined;
}

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  console.log("Hash value: " + data + " -> " + total);
  return total % this.table.length;
}

function showDistro() {
  var c = 0;
  //console.log(this.table);
  while ((c < this.table.length) && (this.table[c] != undefined)) {
    console.log(this.table[c] + ": " + this.values[c]);

    c++;
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

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var someDefinitions = ["Daviddfvdgvdg fg er", "Jennifer reg ergfer", "Donnie regreg ergfrr", "rtg trgrRaymond",
"Cynthia rtg trgrt", "Mike trgtrg tgth", "Clayton gtgrt trgrt", "Danny djf dkjfkdj", "Jonathan rtgrt fghfthy"];

var hTable = new HashTable();
var count = 0;
while (count < someNames.length) {
  hTable.put(someNames[count], someDefinitions[count]);

  count++;
}
hTable.get("David");

hTable.showDistro();