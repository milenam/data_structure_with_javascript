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
  this.recursive1 = recursive1;
  this.recursive2 = recursive2;
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
  this.edges++;
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
  this.marked[this.adj.indexOf(v)] = true;
  if (this.edgesNum[this.adj.indexOf(v)] != undefined) {
        console.log("dfs Visited vertex: " + v);
     }
  for each (var w in this.edgesNum[this.adj.indexOf(v)]) {
    if (!this.marked[this.adj.indexOf(w)]) {
      this.dfs(w);
    }
  }
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
  var source = "Kensington"  ;
  var path = [];
  var roads = [];
  console.log(roads);

  if (this.adj.indexOf(v) > this.adj.indexOf(source)) {
    this.recursive1(v, source, path, roads);
    //console.log(path);
    roads.push(path.length);
    return path;
  } else {
    this.recursive2(v, source, path);
    //console.log(path);
    return path.reverse();
  }

}

function recursive1(v, source, path, roads) {
  if(path.indexOf(v) == -1) {
    path.push(v);
  }

  console.log(this.edgesNum[this.adj.indexOf(v)]);
  for each (var w in this.edgesNum[this.adj.indexOf(v)]) {
//console.log('w',this.adj.indexOf(w)].indexOf(w));
    if ((this.edgesNum[this.adj.indexOf(v)].indexOf(source) != -1) && (path.indexOf(source) == -1)) {
      path.push(source);

    } else if (this.edgesNum[this.adj.indexOf(v)].indexOf(source) == -1){
      if ((path.indexOf(w) == -1) && (path.indexOf(source) == -1)) {
        path.push(w);
        //var index = w;
        this.recursive1(w, source, path);

      }
    } else {

    }
  }
}

function recursive2(v, source, path) {
  for each (var w in this.adj[source]) {

    if ((this.adj[source].indexOf(v) != -1) && (path.indexOf(v) == -1)) {
      path.push(v);
    } else if (this.adj[source].indexOf(v) == -1){
      if(path.indexOf(source) == -1) {
        path.push(source);
      }
      if (w < source) {
        path.push(w);

        this.recursive2(v, w, path);

      }
    } else {

    }
  }
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
//g.showGraph();
//g.dfs("Chelsea");
var vertex = "Derry";
var paths = g.pathTo(vertex);
while (paths.length > 0) {
 if (paths.length > 1) {
  console.log(paths.pop() + '-');
  } else {
    console.log(paths.pop());
 }
}