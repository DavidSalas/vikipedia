/**
 * Created by david on 7/5/14.
 */

'use strict';

var $ = require('jquery');
require('jquery-ui/autocomplete');

var helloWorld = function(){
  return 'Hello World';
};

var initializeWikiSearchBar = function(){
  /*
  *Search the wiki api for a list of suggested articles
  *based on the contents of the search box.
  */
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

exports.helloWorld= helloWorld;
exports.initializeWikiSearchBar= initializeWikiSearchBar;


