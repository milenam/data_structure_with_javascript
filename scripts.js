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
  this.load = load;
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
  for (var key in Object.keys(this.datastore)) {
  console.log(key + " -> " + this.datastore[key]); }
}

function count() { varn=0;
  for (var key in Object.keys(this.datastore)) {
    ++n;
  }

return n;

}
  function clear() {
    for (var key in Object.keys(this.datastore)) {
      delete this.datastore[key];
  }
}

function xhReq() {
  var xhr = new XMLHttpRequest();
  var contentArr = [];
  xhr.open('get', 'http://milenamaltsev.com/phonebook.txt', true );

  xhr.onreadystatechange = function () {

      if (xhr.readyState == 4) {
         if (xhr.status == 200) {
            content = xhr.responseText;
            var myArray = content.split(", ");
            for (i = 0; i < myArray.length; i++) {
             contentArr.push(myArray[i]);
            }
            //console.log(content);
           
           //for (j = 0; j < keys.length; j++) {
             //for (m = 0; m < values.length; m++) {
              //console.log(keys[j]);
               //console.log(values[m]);
              //this.add(keys[j], values[m]);
             //}
           //}
          
          //console.log(contentArr);
         }
        
        //console.log(contentArr);
      }
    //return contentArr;

   }
 xhr.send();
 //console.log(contentArr);
 //return contentArr;
 

}

function load() {
  xhReq();
  //console.log(xhReq());
  
         
    var myArray = xhReq();
    var keys = [];
    var values = [];

    for (i = 0; i < myArray.length; i++) {
      if (myArray[i].match(/[A-Za-z]/)) {
        this.add('hi','356');
        console.log(this.datastore);
      }
        //keys.push(myArray[i]);
      //} else {
        //values.push(myArray[i]);
      //}
    }
           
    
           
           //for (j = 0; j < keys.length; j++) {
             //for (m = 0; m < values.length; m++) {
              //console.log(keys[j]);
               //console.log(values[m]);
              //this.add(keys[j], values[m]);
             //}
           //}
           
      

}

//load("phonebook.txt");
var pbook = new Dictionary();
pbook.load();
console.log(pbook);
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
//console.log("David's extension: " + pbook.find("David"));
//pbook.remove("David");
pbook.showAll();

