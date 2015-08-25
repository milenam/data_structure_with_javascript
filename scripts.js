// FINDING SHORTEST PATH
//http://www.syncano.com/data-structures-in-javascript/
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
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
  }
}

function bfs(s) {
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

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
var vertex = 3;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
  }
}

// #1 WHICH IS FASTER
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

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.dfs(4);


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

// #4

// FINDING SHORTEST PATH
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
  this.c = 0;
  this.k = 0;
  this.rec = rec;
  this.path = [];
}

//TODO: HANDLE CREATION
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
  m = this.adj[this.c++];
  m.push(w);
  n = this.adj[this.k++];
  n.push(v);
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
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
  }
}

function bfs(s) {
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
}

function pathTo(v) {
  var source = "Kensington";
  var index;
  //this.path.push(v);
  for (var i = 0; i < this.adj.length; i++) {
    if (this.adj[i].indexOf(v) != -1) {
      index = i;
      console.log(i + "loop: ", index);
    }
  }

  this.rec(index, source);

  this.path.push(source);
  console.log(this.path);
  return this.path;
}

function rec(index, source) {
  for (var w in this.adj[index]) {
    console.log('log',this.adj[index].indexOf(source));
    if ((this.adj[index].indexOf(source) == -1) && (this.path.indexOf(this.adj[index][w]) == -1)) {
      this.path.push(this.adj[index][w]);
      console.log('path',this.path);
      this.rec(this.adj[index].indexOf(this.adj[index][w]), source);
    }
  }
}



function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph(6);
g.addEdge("Kensington","Knightsbridge");
g.addEdge("Kensington","Chelsea");
g.addEdge("Chelsea","Knightsbridge");
g.addEdge("Chelsea","Fulham");
g.addEdge("Fulham","Buttersea");
var vertex = "Buttersea";
var paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
  }
}

// still figuring out number 4 //TODO: HANDLE CREATION
//TODO: if (this.adj[c[1]].indexOf(source) != 1) && (this.adj[c[1]].indexOf(v) != 1)
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
  this.getIndex = getIndex;
}

function addEdge(v,w) {
  this.adj[this.edges].push(w);
  console.log(this.adj);
  this.adj[this.edges].push(v);
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
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
  }
}

function bfs(s) {
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
}

function getIndex(ele, source) {
  for (var m = 0; m < this.adj.length; m++) {
    if(this.adj[m].indexOf(ele) != -1) {
      if (this.adj[m].indexOf(ele) < this.adj[m].indexOf(source)) {
        return [true, this.adj.indexOf(this.adj[m])];
      } else {
        return [false, this.adj.indexOf(this.adj[m])];
      }
    }
  }
}

function pathTo(v) {
  var source = "Knightsbridge";
  var index;
  var path = [];
  path.push(v);
  var c = this.getIndex(v, source);
  //TODO: if (this.adj[c[1]].indexOf(source) != 1) && (this.adj[c[1]].indexOf(v) != 1)

  if (c[0] == false) {
    //TODO: handle increment case when it's false
    for (var i = c[1]; i > 0; i--) {
      //console.log(i+'path',this.adj[i][path.indexOf(this.adj[i][w])]);
      console.log('cities',i, this.adj[i].indexOf(source));
      if (path.indexOf(this.adj[i][w]) != -1){
      //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
        path.push(source);

      } else {
        if (path.indexOf(source) == -1){
          for (var w in this.adj[i]) {
            console.log(i, this.adj[i][w])
            if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
              path.push(source);
            } else {
                if (path.indexOf(this.adj[i][w]) == -1) {
                  path.push(this.adj[i][w]);
                  //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
              }
            }
          }
        }
      }
    //} else {

    //}

    }
  }
  //path.push(source);
  console.log(path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph(5);
g.addEdge("Kensington","Knightsbridge");
g.addEdge("Kensington","Chelsea");
g.addEdge("Chelsea","Knightsbridge");
g.addEdge("Chelsea","Fulham");
g.addEdge("Fulham","Buttersea");
//g.dfs("Fulham");
var vertex = "Kensington";
var paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
  }
}



////////////////////

else {
      for (var i = c[1]; i < this.adj.length; i++) {
        console.log('c',c[1]);
        console.log('cities',i, this.adj[i].indexOf(source));
        if (path.indexOf(this.adj[i][w]) != -1){
        //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
          path.push(source);

        } else {
          if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
              console.log('i',i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
              } else {
                  if (path.indexOf(this.adj[i][w]) == -1) {
                    path.push(this.adj[i][w]);
                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
                }
              }
            }
          }
        }
      }


//////////////////////

else {
            for (var w in this.adj[i]) {
              console.log('index: ',path.indexOf(this.adj[i][w]), this.adj[i][w]);
              console.log('i',i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) != -1)) {
                //path.push(this.adj[i][w]);
         //       path.push(source);

              } else {
                  if ((path.indexOf(this.adj[i][w]) == -1) && (this.adj[i][w] != source)) {
                    path.push(this.adj[i][w]);

                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
                }


              }
            }

        }
        //path.push(source);
      }
      //path.push(source);
    }
  }


  //////////
  //TODO: if (this.adj[c[1]].indexOf(source) != 1) && (this.adj[c[1]].indexOf(v) != 1)
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
  this.getIndex = getIndex;
}

function addEdge(v,w) {
  this.adj[this.edges].push(w);
  console.log(this.adj);
  this.adj[this.edges].push(v);
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
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
  }
}

function bfs(s) {
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
}

function getIndex(ele, source) {
  var e;
  var s;
  var tempArrE = [];
  var tempArrS = [];
  for (var m = 0; m < this.adj.length; m++) {
    if(this.adj[m].indexOf(ele) != -1) {
      e = this.adj.indexOf(this.adj[m]);
      tempArrE.push(e);
      //console.log(m,e);
    } else if(this.adj[m].indexOf(source) != -1) {
      s = this.adj.indexOf(this.adj[m]);
      tempArrS.push(s);
      //console.log(m,s);

    } else {
    }
  }
  console.log(tempArrE[0],tempArrS[0]);
  if (tempArrE[0] < tempArrS[0]) {
    return [true, tempArrE[1], tempArrS[0]];
  } else {
    return [false, tempArrE[0]]
  }
}

function pathTo(v) {
  var source = "Buttersea";
  var index;
  var path = [];
  path.push(v);
  var c = this.getIndex(v, source);
  if ((this.adj[c[1]].indexOf(source) != -1) && (this.adj[c[1]].indexOf(v) != -1)) {
    path.push(source);
  } else {
    console.log(c[0]);
    if (c[0] == false) {
      //TODO: handle increment case when it's false
      for (var i = c[1]; i > 0; i--) {
        //console.log(i+'path',this.adj[i][path.indexOf(this.adj[i][w])]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        //if (path.indexOf(this.adj[i][w]) != -1){
        //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
          //path.push(source);

        //} else {
          if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
              //console.log(i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
              } else {
                  if (path.indexOf(this.adj[i][w]) == -1) {
                    path.push(this.adj[i][w]);
                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
                  } else {
                    path.splice(1, 1)
                  }
              }
            //}
          }
        }
      }
    } else {
      console.log('indexx', c[2])
      for (var i = c[2]; i > 0; i--) {
        console.log('c',c[2],c[1]);
        console.log('cities',i, this.adj[i].indexOf(source));

          if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
              console.log('i',i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                //path.push(source);
              }
                  if (path.indexOf(this.adj[i][w]) == -1) {
                    path.push(this.adj[i][w]);
                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);

              }

          }
        }
      }
    }
  }
  //path.push(source);
  console.log(path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph(5);
g.addEdge("Kensington","Knightsbridge");
g.addEdge("Kensington","Chelsea");
g.addEdge("Chelsea","Knightsbridge");
g.addEdge("Chelsea","Fulham");
g.addEdge("Fulham","Buttersea");
//g.dfs("Fulham");
var vertex = "Kensington";
var paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
  }
}


//THIS ONE:

//TODO: handle where to push v
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
  this.getIndex = getIndex;
}

function addEdge(v,w) {
  this.adj[this.edges].push(w);
  //console.log(this.adj);
  this.adj[this.edges].push(v);
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
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
  }
}

function bfs(s) {
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
}

function getIndex(ele, source) {
  var e;
  var s;
  var tempArrE = [];
  var tempArrS = [];
  for (var m = 0; m < this.adj.length; m++) {
    if(this.adj[m].indexOf(ele) != -1) {
      e = this.adj.indexOf(this.adj[m]);
      tempArrE.push(e);
      //console.log(m,e);
    } else if(this.adj[m].indexOf(source) != -1) {
      s = this.adj.indexOf(this.adj[m]);
      tempArrS.push(s);
      //console.log(m,s);

    } else {
    }
  }
  console.log(tempArrE,tempArrS);
  if (tempArrE[0] < tempArrS[0]) {
    return [true, tempArrE[0], tempArrE[1], tempArrS[0]];
  } else {
    return [false, tempArrE[0], tempArrE[0]]
  }
}

function pathTo(v) {
  var source = "Manchester";
  var index;
  var path = [];
  var c = this.getIndex(v, source);
  console.log(this.adj[c[2]]);
  //path.push(v);
  if ((this.adj[c[2]].indexOf(source) != -1) && (this.adj[c[2]].indexOf(v) != -1)) {
    path.push(v, source);
  } else {
    //console.log(c[0]);
    if (c[0] == false) {

      //TODO: handle increment case when it's false
      for (var i = c[1]; i > 0; i--) {
        //console.log(i+'path',this.adj[i][path.indexOf(this.adj[i][w])]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        if ((path.indexOf(this.adj[i][w]) != -1) && (path.indexOf(source) == -1)){
        //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
          path.push(source);

        } else {
          if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
              //console.log(i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
              } else {
                  if (path.indexOf(this.adj[i][w]) == -1) {
                    path.push(this.adj[i][w]);
                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
                  }
              }
            }
          }
        }
      }
    } else {
      console.log('indexx', c[1])
      for (var i = c[3]; i > 0; i--) {
        console.log(c[3]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        if ((path.indexOf(this.adj[i][w]) != -1) && (path.indexOf(v) == -1)) {
          //console.log(i + "loop: ", this.adj[i][w]);
         path.push(v);
        } else {
          //if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
               //console.log(i + "loop: ", this.adj[i]);
               //console.log(i,'c',c[2],c[1]);
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
//&&(this.adj[i][w] != v) && (path.indexOf(v) == -1)
              } else if ((path.indexOf(this.adj[i][w]) == -1) && (path.indexOf(v) == -1)) {
                path.push(this.adj[i][w]);


              } else {
//path.push(v);
              }

           // }
          }
        }
      }
      //path.push(v);
      //path.reverse();
    }

  }
  //path.push(source);
  console.log(path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph(8);
g.addEdge("Kensington","Knightsbridge");
g.addEdge("Kensington","Chelsea");
g.addEdge("Chelsea","Knightsbridge");
g.addEdge("Chelsea","Fulham");
g.addEdge("Fulham","Buttersea");
g.addEdge("Buttersea", "Manchester");
g.addEdge("Buttersea", "Derry");
g.addEdge("Derry", "Fulham");
g.bfs("Fulham");
var vertex = "Kensington";
var paths = g.pathTo(vertex);
while (paths.length > 0) {
  if (paths.length > 1) {
    console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
  }
}}
}

// # 5
//THIS ONE:

//TODO: handle where to push v
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
  this.getIndex = getIndex;
  this.fs = fs;
  this.counter = 0;
}

function addEdge(v,w) {
  this.adj[this.edges].push(w);
  //console.log(this.adj);
  this.adj[this.edges].push(v);
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

function fs(v,i) {
  console.log(i);
  //for (var i = 0; i < this.adj.length; i++) {
    //i = this.edges;
  //console.log(this.adj[i].indexOf(v));
  //if (this.adj[i] != undefined) {
   //if (this.adj[i].indexOf(v) != -1) {
      //var m = this.adj[i].indexOf(v);

    //}
  //}
  //while(this.adj[i] != undefined) {
     this.marked[i] = true;
//}

      if (this.adj[i] != undefined) {
       //this.marked[i] = true;
            console.log("dfs Visited vertex: " + v);
      }
      for each (var w in this.adj[i]) {
        if (!this.marked[w]) {
          //this.marked[w] == true;
          this.fs(w,i+1);
        }
      }

  }

function dfs(v) {


  this.fs(v, this.counter);
}

function bfs(s) {
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
}

function getIndex(ele, source) {
  var e;
  var s;
  var tempArrE = [];
  var tempArrS = [];
  for (var m = 0; m < this.adj.length; m++) {
    if(this.adj[m].indexOf(ele) != -1) {
      e = this.adj.indexOf(this.adj[m]);
      tempArrE.push(e);
      //console.log(m,e);
    } else if(this.adj[m].indexOf(source) != -1) {
      s = this.adj.indexOf(this.adj[m]);
      tempArrS.push(s);
      //console.log(m,s);

    } else {
    }
  }
  console.log(tempArrE,tempArrS);
  if (tempArrE[0] < tempArrS[0]) {
    return [true, tempArrE[0], tempArrE[1], tempArrS[0]];
  } else {
    return [false, tempArrE[0], tempArrE[0]]
  }
}

function pathTo(v) {
  var source = "Manchester";
  var index;
  var path = [];
  var c = this.getIndex(v, source);
  console.log(this.adj[c[2]]);
  //path.push(v);
  if ((this.adj[c[2]].indexOf(source) != -1) && (this.adj[c[2]].indexOf(v) != -1)) {
    path.push(v, source);
  } else {
    //console.log(c[0]);
    if (c[0] == false) {

      //TODO: handle increment case when it's false
      for (var i = c[1]; i > 0; i--) {
        //console.log(i+'path',this.adj[i][path.indexOf(this.adj[i][w])]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        if ((path.indexOf(this.adj[i][w]) != -1) && (path.indexOf(source) == -1)){
        //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
          path.push(source);

        } else {
          if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
              //console.log(i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
              } else {
                  if (path.indexOf(this.adj[i][w]) == -1) {
                    path.push(this.adj[i][w]);
                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
                  }
              }
            }
          }
        }
      }
    } else {
      console.log('indexx', c[1])
      for (var i = c[3]; i > 0; i--) {
        console.log(c[3]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        if ((path.indexOf(this.adj[i][w]) != -1) && (path.indexOf(v) == -1)) {
          //console.log(i + "loop: ", this.adj[i][w]);
         path.push(v);
        } else {
          //if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
               //console.log(i + "loop: ", this.adj[i]);
               //console.log(i,'c',c[2],c[1]);
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
//&&(this.adj[i][w] != v) && (path.indexOf(v) == -1)
              } else if ((path.indexOf(this.adj[i][w]) == -1) && (path.indexOf(v) == -1)) {
                path.push(this.adj[i][w]);


              } else {
//path.push(v);
              }

           // }
          }
        }
      }
      //path.push(v);
      //path.reverse();
    }

  }
  //path.push(source);
  console.log(path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph(8);
g.addEdge("Kensington","Knightsbridge");
g.addEdge("Kensington","Chelsea");
g.addEdge("Chelsea","Knightsbridge");
g.addEdge("Chelsea","Fulham");
g.addEdge("Fulham","Buttersea");
g.addEdge("Buttersea", "Manchester");
g.addEdge("Buttersea", "Derry");
g.addEdge("Derry", "Fulham");
g.dfs("Fulham");
//var vertex = "Kensington";
//var paths = g.pathTo(vertex);
//while (paths.length > 0) {
  //if (paths.length > 1) {
  //  console.log(paths.pop() + '-');
  //} else {
  //  console.log(paths.pop());
  //}
//}


/// last 2 arrays

//TODO: handle where to push v
function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  //for (var i = 0; i < this.vertices; ++i) {
    //this.adj[i] = [];
    //this.adj[i].push("");
  //}
  this.edgesNum = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.edgesNum[i] = [];
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
  this.getIndex = getIndex;
  this.fs = fs;
  this.counter = 0;
}

function addEdge(v,w) {
  if (this.adj.indexOf(v) == -1){
    this.adj.push(v);
  }

  if (this.adj.indexOf(w) == -1) {
    this.adj.push(w);
  }
  //console.log(this.adj);
  //this.edgesNum[this.adj.indexOf(v)].push(v);
  this.edgesNum[this.adj.indexOf(v)].push(w);
  this.edgesNum[this.adj.indexOf(w)].push(v);
  //console.log('v',this.edgesNum);
  //this.adj[this.adj[this.edges].indexOf(w)].push(v);
  //this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.adj.length; ++i) {
    console.log(this.adj[i] + " -> " + this.edgesNum[i]);

  }
}

function fs(v,i) {
  console.log(i);
  //for (var i = 0; i < this.adj.length; i++) {
    //i = this.edges;
  //console.log(this.adj[i].indexOf(v));
  //if (this.adj[i] != undefined) {
   //if (this.adj[i].indexOf(v) != -1) {
      //var m = this.adj[i].indexOf(v);

    //}
  //}
  //while(this.adj[i] != undefined) {
     this.marked[this.adj[i].indexOf(v)] = true;
//}

      if (this.adj[i] != undefined) {
       this.marked[i] = true;
            console.log("dfs Visited vertex: " + v);
      }
      for each (var w in this.adj[i]) {
        if (!this.marked[w]) {
          this.marked[w] == true
          this.fs(w,i+1);
        }
      }

  }

function dfs(v) {
  //console.log(this.edgesNum[this.adj.indexOf(v)]);
  //var len = this.edgesNum[this.adj.indexOf(v)]
  for each (var t in this.edgesNum[this.adj.indexOf(v)]) {
    if (!this.marked[this.adj.indexOf(t)]) {
      console.log("dfs Visited vertex: " + t);
      //this.marked[this.adj.indexOf(t)] = true;
    //if (!this.marked[this.adj.indexOf(t)]) {

    }
    this.marked[this.adj.indexOf(t)] = true;
    this.dfs(this.adj[this.adj.indexOf(v)+1]);

      //this.dfs(this.edgesNum[this.adj.indexOf(v)][this.edgesNum[this.adj.indexOf(v)].length - 1]);
    //}
    //}
  }

  //if (!this.marked[this.adj.indexOf(v)]) {
      //this.dfs(this.adj[this.adj.indexOf(v)+1])
      //this.dfs(this.edgesNum[this.adj.indexOf(v)][this.edgesNum[this.adj.indexOf(v)].length - 1]);
    //}

  //console.log(this.edgesNum[this.adj.indexOf(v)][this.edgesNum[this.adj.indexOf(v)].length - 1]);
  //this.dfs(this.edgesNum[this.adj.indexOf(v)][this.edgesNum[this.adj.indexOf(v)].length - 1]);

  //this.marked[this.adj.indexOf(v)] = true;
  //if (this.adj != undefined) {
   //     console.log("dfs Visited vertex: " + v);
  //}
  //for each (var w in this.adj) {
    //if (!this.marked[this.adj.indexOf(w)]) {
      //this.dfs(this.edgesNum[this.adj.indexOf(v)][this.edgesNum[this.adj.indexOf(v)].length - 1]);
   // }
    //}
  //
  //this.fs(v, this.counter);
}

function bfs(s) {
  var queue = [];
  this.marked[this.adj.indexOf(s)] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v != undefined) {
      console.log("bfs Visited vertex: " + v);
    }

    for each (var w in this.adj) {
      if (!this.marked[this.adj.indexOf(w)]) {
        this.edgeTo[this.adj.indexOf(w)] = v;
        this.marked[this.adj.indexOf(w)] = true;
        queue.push(w);
      }
    }
  }
}

function getIndex(ele, source) {
  var e;
  var s;
  var tempArrE = [];
  var tempArrS = [];
  for (var m = 0; m < this.adj.length; m++) {
    if(this.adj[m].indexOf(ele) != -1) {
      e = this.adj.indexOf(this.adj[m]);
      tempArrE.push(e);
      //console.log(m,e);
    } else if(this.adj[m].indexOf(source) != -1) {
      s = this.adj.indexOf(this.adj[m]);
      tempArrS.push(s);
      //console.log(m,s);

    } else {
    }
  }
  console.log(tempArrE,tempArrS);
  if (tempArrE[0] < tempArrS[0]) {
    return [true, tempArrE[0], tempArrE[1], tempArrS[0]];
  } else {
    return [false, tempArrE[0], tempArrE[0]]
  }
}

function pathTo(v) {
  var source = "Manchester";
  var index;
  var path = [];
  var c = this.getIndex(v, source);
  console.log(this.adj[c[2]]);
  //path.push(v);
  if ((this.adj[c[2]].indexOf(source) != -1) && (this.adj[c[2]].indexOf(v) != -1)) {
    path.push(v, source);
  } else {
    //console.log(c[0]);
    if (c[0] == false) {

      //TODO: handle increment case when it's false
      for (var i = c[1]; i > 0; i--) {
        //console.log(i+'path',this.adj[i][path.indexOf(this.adj[i][w])]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        if ((path.indexOf(this.adj[i][w]) != -1) && (path.indexOf(source) == -1)){
        //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
          path.push(source);

        } else {
          if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
              //console.log(i, this.adj[i][w])
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
              } else {
                  if (path.indexOf(this.adj[i][w]) == -1) {
                    path.push(this.adj[i][w]);
                    //console.log(i + "loop: ", this.adj[i][path.indexOf(this.adj[i][w])]);
                  }
              }
            }
          }
        }
      }
    } else {
      console.log('indexx', c[1])
      for (var i = c[3]; i > 0; i--) {
        console.log(c[3]);
        //console.log('cities',i, this.adj[i].indexOf(source));
        if ((path.indexOf(this.adj[i][w]) != -1) && (path.indexOf(v) == -1)) {
          //console.log(i + "loop: ", this.adj[i][w]);
         path.push(v);
        } else {
          //if (path.indexOf(source) == -1){
            for (var w in this.adj[i]) {
               //console.log(i + "loop: ", this.adj[i]);
               //console.log(i,'c',c[2],c[1]);
              if ((this.adj[i].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
                path.push(source);
//&&(this.adj[i][w] != v) && (path.indexOf(v) == -1)
              } else if ((path.indexOf(this.adj[i][w]) == -1) && (path.indexOf(v) == -1)) {
                path.push(this.adj[i][w]);


              } else {
//path.push(v);
              }

           // }
          }
        }
      }
      //path.push(v);
      //path.reverse();
    }

  }
  //path.push(source);
  console.log(path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

g = new Graph(8);
g.addEdge("Kensington","Knightsbridge");
g.addEdge("Kensington","Chelsea");
g.addEdge("Chelsea","Knightsbridge");
g.addEdge("Chelsea","Fulham");
g.addEdge("Fulham","Buttersea");
g.addEdge("Buttersea", "Manchester");
g.addEdge("Buttersea", "Derry");
g.addEdge("Derry", "Fulham");
console.log(g);
g.showGraph();
g.dfs("Chelsea");
//var vertex = "Kensington";
//var paths = g.pathTo(vertex);
//while (paths.length > 0) {
  //if (paths.length > 1) {
  //  console.log(paths.pop() + '-');
  //} else {
  //  console.log(paths.pop());
  //}
//}