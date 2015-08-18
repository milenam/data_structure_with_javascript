// Counting Occurances

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  this.count = 1;

}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.remove = remove;
  this.find = find;
  this.getMin = getMin;
  this.getMax = getMax;
  this.update = update;
  this.countOccurances = countOccurances;

}

function update(data) {
  var grade = this.find(data);
  if (grade != null){
   var c = grade.count++;
  }
  return grade;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
  console.log(current.left);
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  if (this.root == null) {
    var current = this.root;
    return null;
  } else {
    var current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
       return null;
      }
    }
  }
 return current;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }

  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = node.right;
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data); return node;
  }
}

function prArray(arr) {
  console.log(arr[0].toString() + ' ');
  for (var i = 1; i < arr.length; ++i) {
    console.log(arr[i].toString() + ' ');
    if(i%10==0){
       console.log("\n");
    }
  }
}

function genArray(length) {
  var arr = [];
  for(var i = 0;i < length; ++i){
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}

function countOccurances(arr, data) {
  for (var i = 0; i < arr.length; ++i) {

    var g = arr[i];
    var grade = this.find(g);

    if (grade == null) {
     this.insert(arr[i]);

    } else {
       this.update(g);
    }
  }

  var g = data;
  var aGrade = this.find(g);
  if (aGrade == null) {
    console.log("No occurrences of " + g);
  } else {
    console.log("Occurrences of " + g + ": " + aGrade.count);
  }
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();


gradedistro.countOccurances(grades, 100);

// 1 couts number of nodes

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.remove = remove;
  this.find = find;
  this.getMin = getMin;
  this.getMax = getMax;
  this.counter = 0;
  this.count = count;

}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
    this.counter++;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }

    this.counter++;
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
  console.log(current.left);
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  if (this.root == null) {
    var current = this.root;
    return null;
  } else {
    var current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
       return null;
      }
    }
  }
 return current;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }

  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = node.right;
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data); return node;
  }
}

function prArray(arr) {
  console.log(arr[0].toString() + ' ');
  for (var i = 1; i < arr.length; ++i) {
    console.log(arr[i].toString() + ' ');
    if(i%10==0){
       console.log("\n");
    }
  }
}

function genArray(length) {
  var arr = [];
  for(var i = 0;i < length; ++i){
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}

function count() {
  console.log("Number of elements in the BST: ",this.counter);
}


var numbers = new BST();
numbers.insert(14);
numbers.insert(54);
numbers.insert(65);
numbers.insert(71);
numbers.insert(52);
numbers.insert(38);
numbers.count();


// #2 count the number of edges

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.find = find;
  this.countLeaves = countLeaves;

}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }

}

function countLeaves(node){
  if (node == null ) {
    return 0;
  } else if ( (node.left != null) || (node.right != null) ) {
     return (this.countLeaves(node.left) +
     this.countLeaves(node.right));
  } else {
    return 1
  }
}

function displayNumberOfEdges(node) {
  console.log("This BST has: " + this.countLeaves(node) + " edges");
}


function find(data) {
  if (this.root == null) {
    var current = this.root;
    return null;
  } else {
    var current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
       return null;
      }
    }
  }
 return current;
}

var numbers = new BST();
numbers.insert(53);
numbers.insert(54);
numbers.insert(65);
numbers.insert(71);
numbers.insert(50);
numbers.insert(38);
numbers.insert(51);
numbers.insert(37);
numbers.insert(16);
numbers.insert(28);
numbers.insert(15);
//inOrder(53);
displayNumberOfEdges(numbers.root);


// #3 and #4 Min Max values in BST

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  this.count = 1;

}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.remove = remove;
  this.find = find;
  this.getMin = getMin;
  this.getMax = getMax;
}

function update(data) {
  var grade = this.find(data);
  if (grade != null){
   var c = grade.count++;
  }
  return grade;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
  console.log(current.left);
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  if (this.root == null) {
    var current = this.root;
    return null;
  } else {
    var current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
       return null;
      }
    }
  }
 return current;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }

  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = node.right;
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data); return node;
  }
}


var numbers = new BST();
numbers.insert(14);
numbers.insert(54);
numbers.insert(65);
numbers.insert(71);
numbers.insert(52);
numbers.insert(38);
numbers.getMin();
numbers.getMax();

// #5 coutnts occurances for each word

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  this.count = 1;

}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.remove = remove;
  this.find = find;
  this.getMin = getMin;
  this.getMax = getMax;
  this.update = update;
  this.countOccurances = countOccurances;

}

function update(data) {
  var grade = this.find(data);
  if (grade != null){
   var c = grade.count++;
  }
  return grade;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
  console.log(current.left);
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  if (this.root == null) {
    var current = this.root;
    return null;
  } else {
    var current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
       return null;
      }
    }
  }
 return current;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }

  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = node.right;
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data); return node;
  }
}

function prArray(a) {
  var arr = a.split(' ');
  return arr;
}

function countOccurances(arr, data) {
  for (var i = 0; i < arr.length; ++i) {

    var g = arr[i];
    var grade = this.find(g);

    if (grade == null) {
     this.insert(arr[i]);

    } else {
      this.update(g);
    }

    var everyWord = this.find(arr[i]);
    console.log("Occurrences of " + arr[i] + ": " + everyWord.count);
  }
}

var text = "Google Hangouts just got a facelift. The search giant on Monday quietly announced a new, dedicated website for Google Hangouts, bringing a substantial cosmetic overhaul to the service more commonly known as Gchat. The idea is that you can visit this website to enjoy video chats, phone calls or traditional instant messaging without needing to have your Gmail open. With the new page, we just want to make it easier for Hangouts to be discoverable and useful, a Google spokesman told The Huffington Post. To that end, there aren't really any new features on the Hangouts website. Your list of contacts and message windows look exactly the same as they will elsewhere. You can still draw in the chat window, too. The only thing that feels substantially new is a crop of rotating backgrounds. The images aren't changeable, and work from the same system and source that we've used for Chromecast, actually, the spokesman told HuffPost, referring to the company's media-streaming device and its rotating backgrounds. While you can't change the photos, the spokesman did say that's a common feature request, suggesting the limitation could be removed at some point. So what's the big deal with the new Hangouts website? Why would you ever want to use it? Well, there's probably an argument to be made that having a separate outlet for your chats could help you chill out a bit if you want to have a conversation with your friends without watching your Gmail pile up at the same time. (Unfortunately, you cannot disable Hangouts in Gmail without also disabling it on the new website, so you'll have to make do with closing out of your Gmail altogether if you just want to chat. That's okay! You'll survive.) Of course, Google knows why it wants you want to use it: Like Facebook, the more it can diversify its products, the better. Most people will continue to think of Google Hangouts as part of Gmail, but it's also its own standalone product with this website and separate apps. If it can thrive on its own without the crutch of an established service like Gmail, that's good news for Google. For more on recent updates to Google Hangouts, visit the company's official blog.";

var words = prArray(text);
var gradedistro = new BST();


gradedistro.countOccurances(words);




