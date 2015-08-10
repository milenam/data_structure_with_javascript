// Dictionaries
// #1
function Dictionary() {
  this.add = add;
  this.datastore = new Array();
  this.length = 0;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.showOnly = showOnly;
  this.count = count;
  this.clear = clear;
  this.load = load;
}

function add(key, value) {
  this.datastore[key] = value;
  this.length++;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (var key in this.datastore) {
  console.log(key + " -> " + this.datastore[key]);
  }
}

function showOnly(key) {
  console.log(this.datastore[key]);
}

function count() {
  var n = 0;
  for (var key in Object.keys(this.datastore)) {
    ++n;
  }

  return n;

}
  function clear() {
    for (var key in this.datastore) {
      delete this.datastore[key];
  }
}

function load() {
  var xhr = new XMLHttpRequest();
  var keys;
  var values;
  var phones  = foo(xhr);

  xhr.open('get', 'http://milenamaltsev.com/phonebook.txt', true );

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
    foo(xhr);

    }
  }

  xhr.send();

  var myArray = phones.split(", ");
  for (i = 0; i < myArray.length; i++) {

    if (myArray[i].match(/[A-Za-z]/)) {
      var keys = myArray[i];
    } else {
      var values = myArray[i];
    }

    pbook.add(keys,values);

  }

}

function foo(xhr) {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      content = xhr.responseText;
    }
  }

  return content;
}

var pbook = new Dictionary();
pbook.load();
pbook.add("David Backham", "345-435-6546");
pbook.add("Cynthia Smith", "456-453-4534");
pbook.showOnly("Raymond Williams");
pbook.remove("Raymond Williams");
//pbook.clear();
pbook.showAll();
