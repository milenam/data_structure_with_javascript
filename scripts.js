// DICTIONARIES
// #1
function Dictionary() {
  this.add = add;
  this.datastore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for each (var key in Object.keys(this.datastore)) {
  console.log(key + " -> " + this.datastore[key]); }
}

function count() { varn=0;
  for each (var key in Object.keys(this.datastore)) {
    ++n;
  }

return n;

}
  function clear() {
    for each (var key in Object.keys(this.datastore)) {
      delete this.datastore[key];
  }
}

//load("phonebook.txt");
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("David's extension: " + pbook.find("David"));
//pbook.remove("David");
pbook.showAll();
console.log(pbook);
