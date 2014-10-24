  /**
 * Created by david on 10/7/14.
 */

var d3 = require('d3-browserify');

var nodes;
var links;

var addNode = function (id) {
  nodes.push({"id": id});
  update();
};

var removeNode = function (id) {
  var i = 0;
  var n = findNode(id);
  while (i < links.length) {
    if ((links[i]['source'] == n) || (links[i]['target'] == n)) {
      links.splice(i, 1);
    }
    else i++;
  }
  nodes.splice(findNodeIndex(id), 1);
  update();
};

var removeLink = function (source, target) {
  for (var i = 0; i < links.length; i++) {
    if (links[i].source.id == source && links[i].target.id == target) {
      links.splice(i, 1);
      break;
    }
  }
  update();
};

var removeallLinks = function () {
  links.splice(0, links.length);
  update();
};

var removeAllNodes = function () {
  nodes.splice(0, links.length);
  update();
};

var addLink = function (source, target, value) {
  links.push({"source": findNode(source), "target": findNode(target), "value": value});
  update();
};

var findNode = function (id) {
  for (var i in nodes) {
    if (nodes[i]["id"] === id) return nodes[i];
  }
};

var findNodeIndex = function (id) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id == id) {
      return i;
    }
  }
};

var update = function () {
  var link = vis.selectAll("line")
    .data(links, function (d) {
      return d.source.id + "-" + d.target.id;
    });

  link.enter().append("line")
    .attr("id", function (d) {
      return d.source.id + "-" + d.target.id;
    })
    .attr("stroke-width", function (d) {
      return d.value / 10;
    })
    .attr("class", "link");
  link.append("title")
    .text(function (d) {
      return d.value;
    });
  link.exit().remove();

  var node = vis.selectAll("g.node")
    .data(nodes, function (d) {
      return d.id;
    });

  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .call(force.drag);

  nodeEnter.append("svg:circle")
    .attr("r", 12)
    .attr("id", function (d) {
      return "Node;" + d.id;
    })
    .attr("class", "nodeStrokeClass")
    .attr("fill", function(d) { return color(d.id); });

  nodeEnter.append("svg:text")
    .attr("class", "textClass")
    .attr("x", 14)
    .attr("y", ".31em")
    .text(function (d) {
      return d.id;
    });

  node.exit().remove();

  force.on("tick", function () {

    node.attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

    link.attr("x1", function (d) {
      return d.source.x;
    })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });
  });

  // Restart the force layout.
  force
    .gravity(.01)
    .charge(-80000)
    .friction(0)
    .linkDistance( function(d) { return d.value * 10 } )
    .size([w, h])
    .start();
};

// because of the way the network is created, nodes are created first, and links second,
// so the lines were on top of the nodes, this just reorders the DOM to put the svg:g on top
function keepNodesOnTop() {
  $(".nodeStrokeClass").each(function( index ) {
    var gnode = this.parentNode;
    gnode.parentNode.appendChild(gnode);
  });
}
function addNodes() {
  d3.select("svg")
    .remove();
  drawGraph();
}

var initializeNewNodeGraph = function(searchVal) {
  var width = 960;
  var height = 500;

  drawGraph();

  update();

  alert(searchVal);
};

function drawGraph() {

  graph = new myGraph("#svgdiv");

  graph.addNode('Sophia');
  graph.addNode('Daniel');
  graph.addNode('Ryan');
  graph.addNode('Lila');
  graph.addNode('Suzie');
  graph.addNode('Riley');
  graph.addNode('Grace');
  graph.addNode('Dylan');
  graph.addNode('Mason');
  graph.addNode('Emma');
  graph.addNode('Alex');
  graph.addLink('Alex', 'Ryan', '20');
  graph.addLink('Sophia', 'Ryan', '20');
  graph.addLink('Daniel', 'Ryan', '20');
  graph.addLink('Ryan', 'Lila', '30');
  graph.addLink('Lila', 'Suzie', '20');
  graph.addLink('Suzie', 'Riley', '10');
  graph.addLink('Suzie', 'Grace', '30');
  graph.addLink('Grace', 'Dylan', '10');
  graph.addLink('Dylan', 'Mason', '20');
  graph.addLink('Dylan', 'Emma', '20');
  graph.addLink('Emma', 'Mason', '10');
  keepNodesOnTop();

  // callback for the changes in the network
  var step = -1;
  function nextval()
  {
    step++;
    return 2000 + (1500*step); // initial time, wait time
  }

  setTimeout(function() {
    graph.addLink('Alex', 'Sophia', '20');
    keepNodesOnTop();
  }, nextval());

  setTimeout(function() {
    graph.addLink('Sophia', 'Daniel', '20');
    keepNodesOnTop();
  }, nextval());

  setTimeout(function() {
    graph.addLink('Daniel', 'Alex', '20');
    keepNodesOnTop();
  }, nextval());

  setTimeout(function() {
    graph.addLink('Suzie', 'Daniel', '30');
    keepNodesOnTop();
  }, nextval());

  setTimeout(function() {
    graph.removeLink('Dylan', 'Mason');
    graph.addLink('Dylan', 'Mason', '8');
    keepNodesOnTop();
  }, nextval());

  setTimeout(function() {
    graph.removeLink('Dylan', 'Emma');
    graph.addLink('Dylan', 'Emma', '8');
    keepNodesOnTop();
  }, nextval());

}


exports.initializeNewNodeGraph = initializeNewNodeGraph;
