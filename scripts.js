// #2 and #3
//
function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    //this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.toString = toString;
  this.showGraph = showGraph;
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
  this.dfs = dfs;
  this.bfs = bfs;
  this.edgeTo = [];
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
}

function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    console.log(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined) {
        console.log(this.adj[i][j] + ' ');
      }
    }
  }
}

function dfs(v) {
  var start = new Date().getTime();
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
  }
  var stop = new Date().getTime();
  var res = stop - start;
  console.log('milliseconds: ',res);
}

function bfs(s) {
  var start = new Date().getTime();
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v != undefined) {
      console.log("bfs Visited vertex: " + v);
    }

    for each (var w in this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
  var stop = new Date().getTime();
  var res = stop - start;
  console.log('milliseconds: ',res);
}

function pathTo(v) {
  var source = 0;
  var path = [];

  path.push(v);
    for each (var w in this.adj[v]) {
      console.log(this.adj[v].indexOf(source));
      if (this.adj[v].indexOf(source) == -1) {

        path.push(w);

      }
    }

  path.push(source);
  console.log(path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

function write(data) {
  var xhr = new XMLHttpRequest();
  //var phones  = foo(xhr);

  xhr.open('post', 'http://milenamaltsev.com/phonebook.txt', true );

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      alert(xhr.responseText);

    }
  }

  xhr.send(data);


}

function foo(xhr) {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      content = xhr.responseText;
    }
  }

  return content;
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
write(g);
