/**
 * Created by david on 7/4/14.
 */

'use strict';

var searchUtils = require("./app/searchUtils");
var WikiGraph = require("./app/WikiGraph");

searchUtils.initializeWikiSearchBar();

// You can do this from the console as much as you like...
var graph = new WikiGraph("#wikiGraph")
graph.addNode("Cause");
graph.addNode("Effect");
graph.addLink("Cause", "Effect");
graph.addNode("A");
graph.addNode("B");
graph.addLink("A", "B");



