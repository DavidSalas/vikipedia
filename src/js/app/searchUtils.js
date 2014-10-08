/**
 * Created by david on 7/5/14.
 */

'use strict';

var $ = require('jquery');
require('jquery-ui/autocomplete');

var initializeWikiSearchBar = function(){

  $("#searchInput").bind(
    "keydown",
    function(e){
      // Enter is pressed
      if (e.keyCode == 13){
        var d3Util = require('./d3Utils');
        d3Util.initializeNewNodeGraph($("#searchInput").val());
      }
    }
  );

  $("#searchInput").autocomplete({
    source: function (request, response) {
      $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
          'action': "opensearch",
          'format': "json",
          'search': request.term
        },
        success: function (data) {
          response(data[1]);
        }
      });
    }
  });
};

exports.initializeWikiSearchBar= initializeWikiSearchBar;


